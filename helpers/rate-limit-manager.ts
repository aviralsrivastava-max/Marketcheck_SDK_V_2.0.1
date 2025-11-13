/* tslint:disable */
/* eslint-disable */
/**
 * MarketCheck API Rate Limit Manager V2
 *
 * Advanced rate limiting with:
 * - Proactive header monitoring (X-RateLimit-Remaining, X-RateLimit-Reset)
 * - Exponential backoff with jitter for 429 errors
 * - Retry-After header respect
 * - Token bucket algorithm for smooth request distribution
 * - Optimized initial burst control
 */

interface QueuedRequest {
  resolve: () => void;
  reject: (error: Error) => void;
  timestamp: number;
  retryCount: number;
}

interface RateLimitInfo {
  limit: number | null;
  remaining: number | null;
  resetTime: Date | null;
}

interface RateLimitStats {
  limit: number | null;
  remaining: number | null;
  executing: number;
  queued: number;
  resetTime: Date | null;
  retryAfter: number | null;
}

interface TierInfo {
  tier: string;
  rateLimit: number;
  quotaLimit: number | null;
  maxRowsPerPage: number;
  maxTotalResults: number | null;
  maxRadius: number | null;
}

export class RateLimitManager {
  private limit: number | null = null;
  private remaining: number | null = null;
  private resetTime: Date | null = null;
  private queue: QueuedRequest[] = [];
  private executing: number = 0;
  private maxConcurrent: number = 10; // Start conservative for initial learning
  private resetTimer: NodeJS.Timeout | null = null;
  private isProcessing: boolean = false;

  // V2: New fields
  private retryAfter: number | null = null; // From Retry-After header (ms)
  private adaptiveBuffer: number = 5; // Dynamic buffer based on observed behavior
  private consecutive429s: number = 0; // Track consecutive rate limit errors
  private lastRequestTime: number = 0; // For request pacing
  private requestInterval: number = 0; // Min ms between requests

  // V3: Token bucket local refill
  private refillInterval: NodeJS.Timeout | null = null; // Timer for local token refill
  private refillRate: number = 0; // Tokens to add per refill interval
  private refillIntervalMs: number = 0; // How often to refill (ms)

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
  getRateLimitInfo(): RateLimitInfo {
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
  async waitForTurn(): Promise<void> {
    // V2: Check if we're in Retry-After backoff period
    if (this.retryAfter !== null && Date.now() < this.retryAfter) {
      return this.addToQueue(0);
    }

    // V2: Implement request pacing (minimum interval between requests)
    if (this.requestInterval > 0) {
      const timeSinceLastRequest = Date.now() - this.lastRequestTime;
      if (timeSinceLastRequest < this.requestInterval) {
        await this.sleep(this.requestInterval - timeSinceLastRequest);
      }
    }

    // Case 1: First request (no rate limit info yet)
    if (this.limit === null) {
      if (this.executing < this.maxConcurrent) {
        this.executing++;
        this.lastRequestTime = Date.now();
        return Promise.resolve();
      }
      // Queue it
      return this.addToQueue(0);
    }

    // Case 2: We have rate limit info
    // V2: Proactive check - stop sending BEFORE we hit zero
    if (this.canSendNow()) {
      this.executing++;
      if (this.remaining !== null) {
        this.remaining--;
      }
      this.lastRequestTime = Date.now();
      return Promise.resolve();
    }

    // Case 3: Need to queue
    return this.addToQueue(0);
  }

  /**
   * V2: Improved canSendNow with proactive checks
   */
  private canSendNow(): boolean {
    // Check concurrent limit
    if (this.executing >= this.maxConcurrent) {
      return false;
    }

    // V2: Proactive rate limit check with adaptive buffer
    if (this.remaining !== null) {
      // Calculate effective remaining accounting for in-flight requests
      const effectiveRemaining = this.remaining - this.executing;

      // V2: Use adaptive buffer that increases after 429 errors
      // Fixed: Changed from <= to < to allow processing when exactly at buffer
      if (effectiveRemaining < this.adaptiveBuffer) {
        return false;
      }
    }

    return true;
  }

  /**
   * Add request to queue with retry count
   */
  private addToQueue(retryCount: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve,
        reject,
        timestamp: Date.now(),
        retryCount
      });
    });
  }

  /**
   * V2: Called after each response to update rate limit state
   */
  updateFromResponse(response: any): void {
    const headers = response.headers;

    // Extract rate limit headers
    if (headers['ratelimit-limit']) {
      const newLimit = parseInt(headers['ratelimit-limit'], 10);
      const newRemaining = parseInt(headers['ratelimit-remaining'], 10);
      const resetTimeStr = headers['ratelimit-reset-time'];

      // First time learning the rate limit
      if (this.limit === null) {
        this.limit = newLimit;
        console.log(`[MarketCheck SDK V2] Rate limit discovered: ${newLimit} requests/second`);

        // V2: Calculate optimal settings based on rate limit
        this.configureForRateLimit(newLimit);
      }

      this.limit = newLimit;
      this.remaining = newRemaining;

      if (resetTimeStr) {
        this.resetTime = new Date(resetTimeStr);
      }

      // V2: Proactive warning when remaining gets low
      const remainingPercent = this.remaining / this.limit;
      if (remainingPercent <= 0.25 && this.remaining > 0) {
        console.warn(
          `[MarketCheck SDK V2] Rate limit running low: ${this.remaining}/${this.limit} (${(remainingPercent * 100).toFixed(0)}%)`
        );
      }

      // V2: Increase adaptive buffer when we're close to exhaustion (less aggressive)
      if (this.remaining <= 3 && this.adaptiveBuffer < 10) {
        this.adaptiveBuffer = Math.min(this.adaptiveBuffer + 1, 10);
        console.log(`[MarketCheck SDK V2] Increased adaptive buffer to ${this.adaptiveBuffer}`);
      }

      // Schedule reset if we hit threshold
      if (this.remaining <= this.adaptiveBuffer && this.queue.length > 0) {
        console.warn(
          `[MarketCheck SDK V2] Rate limit threshold reached (${this.remaining}/${this.limit}). ` +
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

    // Detect tier on first response
    if (this.tierInfo === null && this.limit !== null) {
      this.tierInfo = this.detectTier(this.limit, this.quotaLimit);
      console.log(`[MarketCheck SDK V2] Tier detected: ${this.tierInfo.tier}`);
      console.log(`[MarketCheck SDK V2] Optimized for ${this.maxConcurrent} concurrent, buffer: ${this.adaptiveBuffer}`);
    }

    // V2: Reset consecutive 429 counter on successful request
    this.consecutive429s = 0;

    // Mark request as completed
    this.executing--;

    // Process queue if we have capacity
    this.processQueue();
  }

  /**
   * V2: Enhanced error handling with exponential backoff
   */
  handle429Error(error: any, response: any): void {
    this.consecutive429s++;

    // Extract Retry-After header if present
    const headers = response?.headers || {};
    const retryAfterHeader = headers['retry-after'];
    const MAX_RETRY_AFTER = 60; // Cap at 60 seconds

    if (retryAfterHeader) {
      // Retry-After can be in seconds or HTTP date
      const retryAfterSeconds = parseInt(retryAfterHeader, 10);
      if (!isNaN(retryAfterSeconds)) {
        // Cap unreasonably large Retry-After values (quota exhaustion)
        if (retryAfterSeconds > MAX_RETRY_AFTER) {
          console.error(
            `[MarketCheck SDK V2] 429 Error - Retry-After: ${retryAfterSeconds}s (${(retryAfterSeconds / 86400).toFixed(1)} days) ` +
            `(consecutive: ${this.consecutive429s})`
          );
          console.error(
            `[MarketCheck SDK V2] Retry-After exceeds maximum (${MAX_RETRY_AFTER}s). ` +
            `This likely indicates quota exhaustion. Capping at ${MAX_RETRY_AFTER}s.`
          );
          this.retryAfter = Date.now() + (MAX_RETRY_AFTER * 1000);
        } else {
          this.retryAfter = Date.now() + (retryAfterSeconds * 1000);
          console.warn(
            `[MarketCheck SDK V2] 429 Error - Retry-After: ${retryAfterSeconds}s ` +
            `(consecutive: ${this.consecutive429s})`
          );
        }
      }
    } else {
      // V2: Exponential backoff with jitter
      const baseDelay = 1000; // 1 second base
      const maxDelay = 10000; // 10 seconds max
      const exponentialDelay = Math.min(baseDelay * Math.pow(2, this.consecutive429s - 1), maxDelay);

      // Add jitter (±20%) to prevent thundering herd
      const jitter = exponentialDelay * 0.2 * (Math.random() * 2 - 1);
      const delayMs = exponentialDelay + jitter;

      this.retryAfter = Date.now() + delayMs;
      console.warn(
        `[MarketCheck SDK V2] 429 Error - Exponential backoff: ${(delayMs / 1000).toFixed(2)}s ` +
        `(attempt ${this.consecutive429s})`
      );
    }

    // V2: Gradually increase adaptive buffer after 429 (more conservative)
    this.adaptiveBuffer = Math.min(this.adaptiveBuffer + 2, 12);
    console.log(`[MarketCheck SDK V2] Increased adaptive buffer to ${this.adaptiveBuffer} after 429`);

    // Mark request as completed
    this.executing--;

    // Schedule retry
    setTimeout(() => {
      this.retryAfter = null;
      console.log('[MarketCheck SDK V2] Retry-After period ended. Resuming requests...');
      this.processQueue();
    }, this.retryAfter - Date.now());
  }

  /**
   * V2: Configure optimal settings based on discovered rate limit
   */
  private configureForRateLimit(rateLimit: number): void {
    if (rateLimit >= 40) {
      // STANDARD/ENTERPRISE tier (40+ RPS)
      // V2: Optimized for high throughput with safety margin
      // Use 30 out of 40 capacity = 75% utilization
      // Leaves 10 requests as safety margin for better stability
      this.maxConcurrent = 30;
      this.adaptiveBuffer = 5;
      this.requestInterval = 0; // No artificial pacing needed

      console.log(`[MarketCheck SDK V2] STANDARD/ENTERPRISE tier optimization:`);
      console.log(`  - Max concurrent: ${this.maxConcurrent} requests`);
      console.log(`  - Adaptive buffer: ${this.adaptiveBuffer} requests`);
      console.log(`  - Target utilization: 75% (30/40 RPS)`);
    } else if (rateLimit >= 10) {
      // BASIC tier (10 RPS)
      this.maxConcurrent = Math.floor(rateLimit * 0.8);
      this.adaptiveBuffer = Math.max(Math.floor(rateLimit * 0.1), 1);
      this.requestInterval = Math.floor(1000 / rateLimit);

      // V3: Start local token bucket refill for BASIC tier
      this.startLocalRefill(rateLimit);
    } else {
      // FREE tier (5 RPS)
      this.maxConcurrent = Math.max(Math.floor(rateLimit * 0.6), 3);
      this.adaptiveBuffer = 1;
      this.requestInterval = Math.floor(1000 / rateLimit);

      // V3: Start local token bucket refill for FREE tier
      this.startLocalRefill(rateLimit);
    }
  }

  /**
   * V3: Start local token bucket refill
   * Gradually refills tokens instead of waiting for API headers
   */
  private startLocalRefill(rateLimit: number): void {
    // Stop any existing refill
    this.stopLocalRefill();

    // Configure refill rate based on tier
    // For 5 RPS: Add 1 token every 200ms
    // For 10 RPS: Add 1 token every 100ms
    this.refillIntervalMs = Math.floor(1000 / rateLimit);
    this.refillRate = 1;

    console.log(`[MarketCheck SDK V3] Starting local token bucket refill: ${this.refillRate} token every ${this.refillIntervalMs}ms`);

    // Start periodic refill
    this.refillInterval = setInterval(() => {
      if (this.remaining !== null && this.limit !== null) {
        // Don't refill beyond the limit
        if (this.remaining < this.limit) {
          this.remaining = Math.min(this.remaining + this.refillRate, this.limit);

          // Try to process queue whenever we add tokens
          if (this.queue.length > 0) {
            this.processQueue();
          }
        }
      }
    }, this.refillIntervalMs);
  }

  /**
   * V3: Stop local token bucket refill
   */
  private stopLocalRefill(): void {
    if (this.refillInterval) {
      clearInterval(this.refillInterval);
      this.refillInterval = null;
      console.log('[MarketCheck SDK V3] Stopped local token bucket refill');
    }
  }

  /**
   * Called when a request fails (non-429)
   */
  handleRequestError(error: Error): void {
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

      // Check rate limit with adaptive buffer
      const rateLimitAvailable = this.remaining !== null
        ? Math.max(this.remaining - this.adaptiveBuffer, 0)
        : this.maxConcurrent;

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
          `[MarketCheck SDK V2] Released ${canSend} requests. ` +
          `Queue: ${this.queue.length}, Executing: ${this.executing}, Remaining: ${this.remaining || '?'}`
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

    // V2: Adaptive buffer based on observed behavior
    // Reduced buffer for faster recovery, adjust based on 429 errors
    const transitionBuffer = 300 + (this.consecutive429s * 50);
    waitTime = Math.max(waitTime + transitionBuffer, 0);

    console.log(
      `[MarketCheck SDK V2] Waiting ${Math.ceil(waitTime / 1000)}s until rate limit reset ` +
      `(buffer: ${transitionBuffer}ms)`
    );

    this.resetTimer = setTimeout(() => {
      console.log('[MarketCheck SDK V2] Rate limit window reset. Resuming...');

      // Reset rate limit
      if (this.limit !== null) {
        this.remaining = this.limit;
      }

      // V2: Aggressively reduce adaptive buffer on successful resets
      if (this.consecutive429s === 0 && this.adaptiveBuffer > 5) {
        this.adaptiveBuffer = Math.max(this.adaptiveBuffer - 3, 5);
        console.log(`[MarketCheck SDK V2] Reduced adaptive buffer to ${this.adaptiveBuffer}`);
      }

      // Process queue
      this.processQueue();
      this.resetTimer = null;
    }, waitTime);
  }

  /**
   * Utility: Sleep for ms
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get statistics for debugging
   */
  getStats(): RateLimitStats {
    return {
      limit: this.limit,
      remaining: this.remaining,
      executing: this.executing,
      queued: this.queue.length,
      resetTime: this.resetTime,
      retryAfter: this.retryAfter
    };
  }

  /**
   * Clear all queued requests (useful for cleanup)
   */
  clearQueue(): void {
    this.queue.forEach(queued => {
      queued.reject(new Error('Request cancelled'));
    });
    this.queue = [];

    if (this.resetTimer) {
      clearTimeout(this.resetTimer);
      this.resetTimer = null;
    }

    // V3: Stop local refill when clearing queue
    this.stopLocalRefill();
  }

  /**
   * Get tier information (for pagination helper)
   */
  getTierInfo(): TierInfo | null {
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
        maxTotalResults: null, // Unlimited
        maxRadius: null // Unlimited
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
