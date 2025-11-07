/* tslint:disable */
/* eslint-disable */
/**
 * Pagination Extensions for MarketCheck API Classes
 *
 * Adds auto-pagination wrapper methods to API classes
 */

import { PaginationHelper, PaginatedResults, PaginationProgress } from './helpers/pagination-helper';
import type { CarSearchApiSearchCarActiveRequest } from './api';

/**
 * Pagination options for *All() methods
 */
export interface PaginationOptions {
    totalResults?: number;
    onProgress?: (progress: PaginationProgress) => void;
}

/**
 * Extension methods for CarSearchApi
 * These should be added to the CarSearchApi class
 */
export class CarSearchApiPaginationExtensions {
    /**
     * Auto-pagination wrapper for searchCarActive
     * Automatically fetches multiple pages and aggregates results
     *
     * @example
     * const results = await api.searchCarActiveAll(
     *     { make: ['Honda'], model: ['Accord'] },
     *     { totalResults: 500 }
     * );
     * console.log(results.listings.length); // 500
     *
     * @param api - The CarSearchApi instance
     * @param requestParameters - Request parameters (excluding rows/start)
     * @param paginationOptions - Pagination options
     */
    static async searchCarActiveAll(
        api: any,
        requestParameters: Omit<CarSearchApiSearchCarActiveRequest, 'rows' | 'start'>,
        paginationOptions?: PaginationOptions
    ): Promise<PaginatedResults> {
        const helper = new PaginationHelper(api.configuration, {
            onProgress: paginationOptions?.onProgress
        });

        return helper.fetchAll(
            (start, rows) => api.searchCarActive({ ...requestParameters, start, rows }),
            paginationOptions?.totalResults
        );
    }

    /**
     * Auto-pagination wrapper for searchCarAuctionActive
     */
    static async searchCarAuctionActiveAll(
        api: any,
        requestParameters: Omit<any, 'rows' | 'start'>,
        paginationOptions?: PaginationOptions
    ): Promise<PaginatedResults> {
        const helper = new PaginationHelper(api.configuration, {
            onProgress: paginationOptions?.onProgress
        });

        return helper.fetchAll(
            (start, rows) => api.searchCarAuctionActive({ ...requestParameters, start, rows }),
            paginationOptions?.totalResults
        );
    }

    /**
     * Auto-pagination wrapper for searchCarFsboActive
     */
    static async searchCarFsboActiveAll(
        api: any,
        requestParameters: Omit<any, 'rows' | 'start'>,
        paginationOptions?: PaginationOptions
    ): Promise<PaginatedResults> {
        const helper = new PaginationHelper(api.configuration, {
            onProgress: paginationOptions?.onProgress
        });

        return helper.fetchAll(
            (start, rows) => api.searchCarFsboActive({ ...requestParameters, start, rows }),
            paginationOptions?.totalResults
        );
    }

    /**
     * Auto-pagination wrapper for searchCarRecents
     */
    static async searchCarRecentsAll(
        api: any,
        requestParameters: Omit<any, 'rows' | 'start'>,
        paginationOptions?: PaginationOptions
    ): Promise<PaginatedResults> {
        const helper = new PaginationHelper(api.configuration, {
            onProgress: paginationOptions?.onProgress
        });

        return helper.fetchAll(
            (start, rows) => api.searchCarRecents({ ...requestParameters, start, rows }),
            paginationOptions?.totalResults
        );
    }
}
