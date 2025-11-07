/* tslint:disable */
/* eslint-disable */
/**
 * MarketCheck API Auto-Pagination Helper
 *
 * Automatically handles pagination based on API tier limits:
 * - Free/Basic/Standard: Max 50 rows per page, 10,000 total results
 * - Enterprise: Unlimited
 * - Detects tier limits from API responses
 * - Handles parallel page fetching with rate limiting
 * - Aggregates results automatically
 */

import type { AxiosResponse } from 'axios';
import type { Configuration } from '../configuration';
import type { SearchResponse } from '../api';

export interface PaginationConfig {
    maxRowsPerPage?: number;      // Max rows per request (default: from tier)
    maxTotalResults?: number;      // Max total results to fetch (default: from tier)
    parallelPages?: number;        // Number of pages to fetch in parallel (default: based on rate limit)
    onProgress?: (progress: PaginationProgress) => void;  // Progress callback
}

export interface PaginationProgress {
    currentPage: number;
    totalPages: number;
    fetchedResults: number;
    totalAvailable: number;
    percentComplete: number;
}

export interface PaginatedResults<T = any> {
    listings: T[];
    totalFound: number;
    totalFetched: number;
    pagesProcessed: number;
    hasMore: boolean;
    facets?: any;
    stats?: any;
    range_facets?: any;
}

export class PaginationHelper {
    private config: Configuration;
    private maxRowsPerPage: number = 50;        // API limit for most endpoints
    private maxTotalResults: number = 10000;    // API pagination limit
    private parallelPages: number = 3;          // Parallel requests
    private onProgress?: (progress: PaginationProgress) => void;

    constructor(config: Configuration, options?: PaginationConfig) {
        this.config = config;

        // Get tier info from rate limiter (if available)
        const tierInfo = config.rateLimitManager?.getTierInfo();

        if (tierInfo) {
            this.maxRowsPerPage = tierInfo.maxRowsPerPage;
            this.maxTotalResults = tierInfo.maxTotalResults || 10000;

            // Adjust parallel pages based on rate limit
            // Conservative: use 1/3 of rate limit for parallel fetching
            const rateLimit = tierInfo.rateLimit;
            this.parallelPages = Math.max(Math.floor(rateLimit / 3), 1);

            console.log(`[MarketCheck SDK Pagination] Using tier: ${tierInfo.tier}`);
            console.log(`[MarketCheck SDK Pagination] Max per page: ${this.maxRowsPerPage}`);
            console.log(`[MarketCheck SDK Pagination] Max total: ${this.maxTotalResults}`);
            console.log(`[MarketCheck SDK Pagination] Parallel pages: ${this.parallelPages}`);
        }

        // Override with user options if provided
        if (options?.maxRowsPerPage) {
            this.maxRowsPerPage = options.maxRowsPerPage;
        }
        if (options?.maxTotalResults) {
            this.maxTotalResults = options.maxTotalResults;
        }
        if (options?.parallelPages) {
            this.parallelPages = options.parallelPages;
        }
        if (options?.onProgress) {
            this.onProgress = options.onProgress;
        }
    }

    /**
     * Automatically fetch all pages for a search query
     *
     * @param fetchPage - Function that fetches a single page (start, rows)
     * @param requestedRows - Total number of results user wants (optional)
     * @returns Aggregated results from all pages
     */
    async fetchAll<T = any>(
        fetchPage: (start: number, rows: number) => Promise<AxiosResponse<SearchResponse>>,
        requestedRows?: number
    ): Promise<PaginatedResults<T>> {
        console.log('[MarketCheck SDK Pagination] Starting pagination...');

        // 1. First request to get total count
        const firstPage = await fetchPage(0, this.maxRowsPerPage);
        const totalAvailable = firstPage.data.num_found ?? 0;
        const firstListings = (firstPage.data.listings ?? []) as T[];

        // Capture facets, stats, and range_facets from the first page
        const facets = firstPage.data.facets;
        const stats = firstPage.data.stats;
        const rangeFacets = firstPage.data.range_facets;

        console.log(`[MarketCheck SDK Pagination] Found ${totalAvailable} total results available`);
        console.log(`[MarketCheck SDK Pagination] First page returned ${firstListings.length} results`);

        // 2. Calculate how many results we can/should fetch
        const maxFetchable = Math.min(this.maxTotalResults, totalAvailable);
        const targetRows = requestedRows
            ? Math.min(requestedRows, maxFetchable)
            : maxFetchable;

        console.log(`[MarketCheck SDK Pagination] Tier allows max ${this.maxTotalResults} results`);
        console.log(`[MarketCheck SDK Pagination] Will fetch ${targetRows} results`);

        // 3. If first page has everything, return it
        if (firstListings.length >= targetRows || firstListings.length >= totalAvailable) {
            return {
                listings: firstListings.slice(0, targetRows),
                totalFound: totalAvailable,
                totalFetched: firstListings.length,
                pagesProcessed: 1,
                hasMore: totalAvailable > firstListings.length,
                facets,
                stats,
                range_facets: rangeFacets
            };
        }

        // 4. Calculate pages needed
        const totalPages = Math.ceil(targetRows / this.maxRowsPerPage);
        const allListings: T[] = [...firstListings];

        console.log(`[MarketCheck SDK Pagination] Need ${totalPages} pages total`);

        // Report initial progress
        this.reportProgress(1, totalPages, allListings.length, totalAvailable);

        // 5. Fetch remaining pages in batches
        for (let batch = 1; batch < totalPages; batch += this.parallelPages) {
            const batchPromises: Promise<AxiosResponse<SearchResponse>>[] = [];

            // Create batch of parallel requests
            for (let i = 0; i < this.parallelPages && (batch + i) < totalPages; i++) {
                const pageNum = batch + i;
                const start = pageNum * this.maxRowsPerPage;

                // Don't fetch more than we need
                const remainingNeeded = targetRows - allListings.length;
                if (remainingNeeded <= 0) break;

                const rowsToFetch = Math.min(this.maxRowsPerPage, remainingNeeded);
                batchPromises.push(fetchPage(start, rowsToFetch));
            }

            if (batchPromises.length === 0) break;

            console.log(
                `[MarketCheck SDK Pagination] Fetching batch: pages ${batch + 1}-${batch + batchPromises.length}`
            );

            try {
                // Execute batch (rate limiter handles queuing automatically)
                const batchResults = await Promise.all(batchPromises);

                // Aggregate results
                for (const result of batchResults) {
                    const listings = (result.data.listings ?? []) as T[];
                    allListings.push(...listings);

                    // Report progress
                    const currentPage = batch + batchResults.indexOf(result) + 1;
                    this.reportProgress(currentPage + 1, totalPages, allListings.length, totalAvailable);

                    // Stop if we have enough
                    if (allListings.length >= targetRows) {
                        break;
                    }
                }

                console.log(`[MarketCheck SDK Pagination] Progress: ${allListings.length}/${targetRows} results`);

                if (allListings.length >= targetRows) {
                    break;
                }
            } catch (error: any) {
                // Handle 422 pagination limit error
                if (error.response?.status === 422) {
                    const currentStart = (batch * this.maxRowsPerPage);
                    console.warn(
                        `\n⚠️  [MarketCheck SDK] API pagination limit reached at offset ${currentStart}.\n` +
                        `    Successfully fetched ${allListings.length} results out of ${targetRows} requested.\n` +
                        `    This query is too broad for deeper pagination.\n\n` +
                        `    💡 Suggestions to get more results:\n` +
                        `       • Add more specific filters (model, trim, location, price range)\n` +
                        `       • Break into multiple smaller queries by model or state\n` +
                        `       • Use date ranges (first_seen_at, last_seen_at) to narrow results\n`
                    );

                    // Return what we've collected so far
                    break;
                } else if (error.response?.status === 429) {
                    // Rate limit error
                    console.error(
                        `\n❌ [MarketCheck SDK] Rate limit exceeded.\n` +
                        `   Too many requests. Please wait and try again.\n`
                    );
                    throw error;
                } else if (error.response?.status === 401 || error.response?.status === 403) {
                    // Authentication error
                    console.error(
                        `\n❌ [MarketCheck SDK] Authentication failed.\n` +
                        `   Please check your API key.\n`
                    );
                    throw error;
                } else {
                    // Other errors
                    console.error(
                        `\n❌ [MarketCheck SDK] Error fetching page batch ${batch + 1}:\n`,
                        error.message
                    );
                    throw error;
                }
            }
        }

        console.log(
            `[MarketCheck SDK Pagination] ✅ Completed! Fetched ${allListings.length}/${totalAvailable} results ` +
            `across ${Math.ceil(allListings.length / this.maxRowsPerPage)} pages`
        );

        return {
            listings: allListings.slice(0, targetRows),
            totalFound: totalAvailable,
            totalFetched: allListings.length,
            pagesProcessed: Math.ceil(allListings.length / this.maxRowsPerPage),
            hasMore: totalAvailable > allListings.length,
            facets,
            stats,
            range_facets: rangeFacets
        };
    }

    /**
     * Fetch a specific range of results (useful for custom pagination)
     */
    async fetchRange<T = any>(
        fetchPage: (start: number, rows: number) => Promise<AxiosResponse<SearchResponse>>,
        startIndex: number,
        count: number
    ): Promise<PaginatedResults<T>> {
        const startPage = Math.floor(startIndex / this.maxRowsPerPage);
        const endPage = Math.ceil((startIndex + count) / this.maxRowsPerPage);
        const totalPages = endPage - startPage;

        const allListings: T[] = [];
        let totalAvailable = 0;

        console.log(
            `[MarketCheck SDK Pagination] Fetching range: results ${startIndex} to ${startIndex + count}`
        );

        // Fetch pages
        for (let page = startPage; page < endPage; page++) {
            const start = page * this.maxRowsPerPage;
            const response = await fetchPage(start, this.maxRowsPerPage);

            if (page === startPage && response.data.num_found) {
                totalAvailable = response.data.num_found;
            }

            const listings = (response.data.listings ?? []) as T[];
            allListings.push(...listings);
        }

        // Slice to exact range
        const offsetInResults = startIndex % this.maxRowsPerPage;
        const slicedResults = allListings.slice(offsetInResults, offsetInResults + count);

        return {
            listings: slicedResults,
            totalFound: totalAvailable,
            totalFetched: slicedResults.length,
            pagesProcessed: totalPages,
            hasMore: totalAvailable > (startIndex + count)
        };
    }

    /**
     * Report progress to callback
     */
    private reportProgress(
        currentPage: number,
        totalPages: number,
        fetchedResults: number,
        totalAvailable: number
    ): void {
        if (this.onProgress) {
            const percentComplete = Math.min(100, Math.round((currentPage / totalPages) * 100));

            this.onProgress({
                currentPage,
                totalPages,
                fetchedResults,
                totalAvailable,
                percentComplete
            });
        }
    }
}
