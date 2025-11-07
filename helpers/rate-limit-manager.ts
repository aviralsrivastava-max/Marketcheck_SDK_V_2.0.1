/* tslint:disable */
/* eslint-disable */
/**
 * MarketCheck API Rate Limit Manager
 *
 * Automatically handles rate limiting by:
 * - Tracking rate limit info from response headers
 * - Queuing requests when limit is reached
 * - Auto-resuming when rate limit resets
 * - Managing concurrent request limits
 */

import type { AxiosResponse } from 'axios';

export interface RateLimitInfo {
    limit: number | null;           // Total requests allowed per second
    remaining: number | null;       // Requests remaining in current window
    resetTime: Date | null;         // When the rate limit resets
}

export interface TierInfo {
    tier: 'FREE' | 'BASIC' | 'STANDARD' | 'ENTERPRISE' | 'UNKNOWN';
    rateLimit: number;              // Requests per second
    quotaLimit: number | null;      // Monthly API calls (null = unlimited)
    maxRowsPerPage: number;         // Max results per API call
    maxTotalResults: number | null; // Max pagination limit (null = unlimited)
    maxRadius: number | null;       // Mile radius restriction (null = unlimited)
}

interface QueuedRequest {
    resolve: () => void;
    reject: (error: Error) => void;
    timestamp: number;
}

export class RateLimitManager {
    private limit: number | null = null;
    private remaining: number | null = null;
    private resetTime: Date | null = null;
    private queue: QueuedRequest[] = [];
    private executing: number = 0;
    private maxConcurrent: number = 5; // Start very conservative
    private resetTimer: NodeJS.Timeout | null = null;
    private isProcessing: boolean = false;
    private safetyBuffer: number = 0; // Will be calculated as percentage of limit

    // Tier detection fields
    private tierInfo: TierInfo | null = null;
    private quotaLimit: number | null = null;
    private quotaRemaining: number | null = null;

    constructor() {
        // Initialize
    }

    /**
     * Get current rate limit info
     */
    public getRateLimitInfo(): RateLimitInfo {
        return {
            limit: this.limit,
            remaining: this.remaining,
            resetTime: this.resetTime
        };
    }

    /**
     * Called before each request to check if we can proceed
     * Returns a promise that resolves when the request can be sent
     */
    public async waitForTurn(): Promise<void> {
        // Case 1: First request (no rate limit info yet)
        if (this.limit === null) {
            if (this.executing < this.maxConcurrent) {
                this.executing++;
                return Promise.resolve();
            }
            // Queue it
            return this.addToQueue();
        }

        // Case 2: We have rate limit info
        // Check if we can send now
        if (this.canSendNow()) {
            this.executing++;
            if (this.remaining !== null) {
                this.remaining--;
            }
            return Promise.resolve();
        }

        // Case 3: Need to queue
        return this.addToQueue();
    }

    /**
     * Check if we can send a request right now
     */
    private canSendNow(): boolean {
        // Check concurrent limit
        if (this.executing >= this.maxConcurrent) {
            return false;
        }

        // Check rate limit with safety buffer
        if (this.remaining !== null) {
            // Account for in-flight requests that will consume the remaining count
            // If we have 30 concurrent requests and remaining=35, we might actually
            // have only 5 truly available after pending responses complete
            const effectiveRemaining = this.remaining - this.executing;

            // Stop sending when effective remaining hits the buffer
            if (effectiveRemaining <= this.safetyBuffer) {
                return false;
            }
        }

        return true;
    }

    /**
     * Add request to queue and wait for turn
     */
    private addToQueue(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.queue.push({
                resolve,
                reject,
                timestamp: Date.now()
            });
        });
    }

    /**
     * Called after each response to update rate limit state
     */
    public updateFromResponse(response: AxiosResponse): void {
        const headers = response.headers;

        // Extract rate limit headers
        if (headers['ratelimit-limit']) {
            const newLimit = parseInt(headers['ratelimit-limit'], 10);
            const newRemaining = parseInt(headers['ratelimit-remaining'], 10);
            const resetTimeStr = headers['ratelimit-reset-time'];

            // First time learning the rate limit
            if (this.limit === null) {
                this.limit = newLimit;
                console.log(`[MarketCheck SDK] Rate limit discovered: ${newLimit} requests/second`);

                // Optimize concurrent requests based on rate limit
                // Testing: 12 concurrent for better throughput
                if (newLimit >= 40) {
                    this.maxConcurrent = 12;  // Test: 30% of rate limit
                } else {
                    this.maxConcurrent = Math.min(Math.floor(newLimit / 4), 5);  // FREE: 1
                }

                // Set safety buffer based on tier
                // For FREE/BASIC (5 req/sec): Use all capacity (buffer = 0)
                // For STANDARD+ (40+ req/sec): Small buffer for safety (buffer = 0-4)
                if (newLimit >= 40) {
                    // STANDARD/ENTERPRISE: 10% buffer for safety margin
                    this.safetyBuffer = Math.max(Math.floor(newLimit * 0.1), 0);
                } else {
                    // FREE/BASIC: No buffer (use all 5 requests)
                    this.safetyBuffer = 0;
                }

                console.log(`[MarketCheck SDK] Max concurrent: ${this.maxConcurrent} requests`);
                console.log(`[MarketCheck SDK] Safety buffer: ${this.safetyBuffer} requests`);
            }

            this.limit = newLimit;
            this.remaining = newRemaining;

            if (resetTimeStr) {
                this.resetTime = new Date(resetTimeStr);
            }

            // Log rate limit status
            if (this.remaining <= 5 && this.remaining > 0) {
                console.warn(
                    `[MarketCheck SDK] Rate limit warning: ${this.remaining}/${this.limit} requests remaining`
                );
            }

            // Check if we hit the buffer threshold
            if (this.remaining <= this.safetyBuffer && this.queue.length > 0) {
                console.warn(
                    `[MarketCheck SDK] Rate limit threshold reached (${this.remaining}/${this.limit}). ` +
                    `${this.queue.length} requests queued. Waiting for reset...`
                );
                this.scheduleReset();
            }
        }

        // Extract quota headers (monthly limit)
        if (headers['quota-limit']) {
            this.quotaLimit = parseInt(headers['quota-limit'], 10);
            this.quotaRemaining = parseInt(headers['quota-remaining'], 10);
        }

        // Detect tier on first response (when we have both rate limit and quota)
        if (this.tierInfo === null && this.limit !== null) {
            this.tierInfo = this.detectTier(this.limit, this.quotaLimit);
            console.log(`[MarketCheck SDK] Tier detected: ${this.tierInfo.tier}`);
            console.log(`[MarketCheck SDK] Max pagination: ${this.tierInfo.maxTotalResults || 'unlimited'} results`);
            console.log(`[MarketCheck SDK] Max per page: ${this.tierInfo.maxRowsPerPage} rows`);
        }

        // Mark request as completed
        this.executing--;

        // Process queue if we have capacity
        this.processQueue();
    }

    /**
     * Called when a request fails
     */
    public handleRequestError(error: any): void {
        this.executing--;
        this.processQueue();
    }

    /**
     * Process queued requests
     */
    private processQueue(): void {
        // Prevent concurrent processing
        if (this.isProcessing) {
            return;
        }

        this.isProcessing = true;

        try {
            // How many can we send?
            let canSend = 0;

            // Check concurrent limit
            const concurrentAvailable = this.maxConcurrent - this.executing;

            // Check rate limit
            const rateLimitAvailable = this.remaining !== null ? this.remaining : this.maxConcurrent;

            // Check queue size
            const queueSize = this.queue.length;

            canSend = Math.min(concurrentAvailable, rateLimitAvailable, queueSize);

            if (canSend <= 0) {
                return;
            }

            // Release requests from queue
            for (let i = 0; i < canSend; i++) {
                const queued = this.queue.shift();
                if (queued) {
                    this.executing++;
                    if (this.remaining !== null) {
                        this.remaining--;
                    }
                    queued.resolve(); // Allow request to proceed
                }
            }

            if (canSend > 0) {
                console.log(
                    `[MarketCheck SDK] Released ${canSend} requests from queue. ` +
                    `Queue size: ${this.queue.length}, Executing: ${this.executing}`
                );
            }
        } finally {
            this.isProcessing = false;
        }
    }

    /**
     * Schedule automatic reset when rate limit window expires
     */
    private scheduleReset(): void {
        // Clear existing timer
        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
            this.resetTimer = null;
        }

        if (!this.resetTime) {
            return;
        }

        const now = Date.now();
        const resetMs = this.resetTime.getTime();
        let waitTime = resetMs - now;

        // Add small buffer to ensure reset has occurred
        waitTime = Math.max(waitTime + 100, 0);

        console.log(
            `[MarketCheck SDK] Waiting ${Math.ceil(waitTime / 1000)} seconds ` +
            `until rate limit reset at ${this.resetTime.toISOString()}`
        );

        this.resetTimer = setTimeout(() => {
            console.log('[MarketCheck SDK] Rate limit reset. Resuming queued requests...');

            // Reset rate limit
            if (this.limit !== null) {
                this.remaining = this.limit;
            }

            // Process queue
            this.processQueue();

            this.resetTimer = null;
        }, waitTime);
    }

    /**
     * Get statistics for debugging
     */
    public getStats(): {
        limit: number | null;
        remaining: number | null;
        executing: number;
        queued: number;
        resetTime: Date | null;
    } {
        return {
            limit: this.limit,
            remaining: this.remaining,
            executing: this.executing,
            queued: this.queue.length,
            resetTime: this.resetTime
        };
    }

    /**
     * Clear all queued requests (useful for cleanup)
     */
    public clearQueue(): void {
        this.queue.forEach(queued => {
            queued.reject(new Error('Request cancelled'));
        });
        this.queue = [];

        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
            this.resetTimer = null;
        }
    }

    /**
     * Get tier information (for pagination helper)
     */
    public getTierInfo(): TierInfo | null {
        return this.tierInfo;
    }

    /**
     * Detect API tier from rate limit and quota headers
     */
    private detectTier(rateLimit: number, quotaLimit: number | null): TierInfo {
        // FREE: 5 req/sec + 500 monthly calls
        if (rateLimit === 5 && quotaLimit === 500) {
            return {
                tier: 'FREE',
                rateLimit: 5,
                quotaLimit: 500,
                maxRowsPerPage: 50,
                maxTotalResults: 10000,
                maxRadius: 100
            };
        }

        // BASIC: 5 req/sec + 5000 monthly calls
        if (rateLimit === 5 && quotaLimit === 5000) {
            return {
                tier: 'BASIC',
                rateLimit: 5,
                quotaLimit: 5000,
                maxRowsPerPage: 50,
                maxTotalResults: 10000,
                maxRadius: 100
            };
        }

        // STANDARD: 40 req/sec + unlimited monthly calls
        if (rateLimit === 40) {
            return {
                tier: 'STANDARD',
                rateLimit: 40,
                quotaLimit: null,
                maxRowsPerPage: 50,
                maxTotalResults: 10000,
                maxRadius: 500
            };
        }

        // ENTERPRISE: 100+ req/sec + unlimited
        if (rateLimit >= 100) {
            return {
                tier: 'ENTERPRISE',
                rateLimit: rateLimit,
                quotaLimit: null,
                maxRowsPerPage: 50,
                maxTotalResults: null,  // Unlimited
                maxRadius: null         // Unlimited
            };
        }

        // UNKNOWN tier - use safe defaults
        return {
            tier: 'UNKNOWN',
            rateLimit: rateLimit,
            quotaLimit: quotaLimit,
            maxRowsPerPage: 50,
            maxTotalResults: 10000,
            maxRadius: null
        };
    }
}
