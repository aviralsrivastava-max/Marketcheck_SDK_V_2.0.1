/* tslint:disable */
/* eslint-disable */
/**
 * MarketCheck OAuth 2.0 Token Manager
 *
 * Handles OAuth 2.0 token lifecycle:
 * - Generate access tokens from API credentials
 * - Automatic token refresh before expiration
 * - List active tokens
 * - Revoke tokens
 */

import axios, { AxiosInstance } from 'axios';
import type { Configuration } from '../configuration';

export interface OAuth2Credentials {
    clientId: string;        // Your API key
    clientSecret: string;    // Your client secret
}

export interface OAuth2Token {
    access_token: string;
    token_type: string;
    expires_in: number;      // Seconds until expiration
    scope?: string;
}

export interface TokenInfo {
    token: string;
    created_at: string;
    expires_at: string;
    is_active: boolean;
}

export interface TokenListResponse {
    tokens: TokenInfo[];
    next?: string;           // Pagination token
}

export interface TokenRevokeResponse {
    revoked_count: number;
    failed_tokens?: string[];
}

export class OAuthTokenManager {
    private credentials: OAuth2Credentials;
    private currentToken?: OAuth2Token;
    private tokenExpiresAt?: number; // Timestamp
    private readonly baseUrl: string = 'https://api.marketcheck.com';
    private readonly tokenEndpoint: string = '/oauth2/token';
    private readonly tokensEndpoint: string = '/oauth2/tokens';
    private readonly revokeEndpoint: string = '/oauth2/tokens/revoke';
    private readonly expirationBuffer: number = 300; // Refresh 5 minutes before expiry

    constructor(credentials: OAuth2Credentials, baseUrl?: string) {
        this.credentials = credentials;
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }
    }

    /**
     * Generate a new access token using client credentials flow
     *
     * @returns Promise<OAuth2Token>
     * @throws Error if token generation fails
     *
     * @example
     * const tokenManager = new OAuthTokenManager({
     *   clientId: 'YOUR_API_KEY',
     *   clientSecret: 'YOUR_CLIENT_SECRET'
     * });
     *
     * const token = await tokenManager.generateToken();
     * console.log(token.access_token);
     */
    async generateToken(): Promise<OAuth2Token> {
        console.log('[OAuth Token Manager] Generating new access token...');

        try {
            const response = await axios.post<OAuth2Token>(
                `${this.baseUrl}${this.tokenEndpoint}`,
                {
                    grant_type: 'client_credentials',
                    client_id: this.credentials.clientId,
                    client_secret: this.credentials.clientSecret
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );

            this.currentToken = response.data;
            // Calculate expiration time (subtract buffer for safety)
            this.tokenExpiresAt = Date.now() + (response.data.expires_in - this.expirationBuffer) * 1000;

            console.log(`[OAuth Token Manager] Token generated successfully. Expires in ${response.data.expires_in} seconds`);
            return response.data;
        } catch (error: any) {
            const message = error.response?.data?.error_description || error.message || 'Token generation failed';
            console.error(`[OAuth Token Manager] Failed to generate token: ${message}`);
            throw new Error(`Failed to generate OAuth token: ${message}`);
        }
    }

    /**
     * Get the current access token, refreshing if necessary
     *
     * @returns Promise<string> - Valid access token
     *
     * @example
     * const token = await tokenManager.getValidToken();
     * // Use token in API requests
     */
    async getValidToken(): Promise<string> {
        // Check if we need a new token
        if (!this.currentToken || this.isTokenExpired()) {
            await this.generateToken();
        }

        return this.currentToken!.access_token;
    }

    /**
     * Check if the current token is expired or about to expire
     */
    private isTokenExpired(): boolean {
        if (!this.tokenExpiresAt) {
            return true;
        }
        return Date.now() >= this.tokenExpiresAt;
    }

    /**
     * List all active tokens for this client
     *
     * @param nextToken - Optional pagination token from previous response
     * @returns Promise<TokenListResponse>
     *
     * @example
     * const tokens = await tokenManager.listTokens();
     * console.log(`Active tokens: ${tokens.tokens.length}`);
     *
     * // Paginate through all tokens
     * let allTokens = [];
     * let response = await tokenManager.listTokens();
     * allTokens.push(...response.tokens);
     *
     * while (response.next) {
     *   response = await tokenManager.listTokens(response.next);
     *   allTokens.push(...response.tokens);
     * }
     */
    async listTokens(nextToken?: string): Promise<TokenListResponse> {
        try {
            const params: any = {
                api_key: this.credentials.clientId
            };

            if (nextToken) {
                params.next = nextToken;
            }

            const response = await axios.get<TokenListResponse>(
                `${this.baseUrl}${this.tokensEndpoint}`,
                { params }
            );

            console.log(`[OAuth Token Manager] Found ${response.data.tokens.length} active tokens`);
            return response.data;
        } catch (error: any) {
            const message = error.response?.data?.error || error.message || 'Failed to list tokens';
            console.error(`[OAuth Token Manager] Failed to list tokens: ${message}`);
            throw new Error(`Failed to list OAuth tokens: ${message}`);
        }
    }

    /**
     * Revoke one or more access tokens
     *
     * @param accessTokens - Array of tokens to revoke (max 15, must be non-empty)
     * @returns Promise<TokenRevokeResponse>
     *
     * @example
     * // Revoke specific tokens
     * const result = await tokenManager.revokeTokens(['token1', 'token2']);
     * console.log(`Revoked ${result.revoked_count} tokens`);
     *
     * // Revoke all active tokens
     * const tokens = await tokenManager.listTokens();
     * const tokenStrings = tokens.tokens.map(t => t.token);
     * await tokenManager.revokeTokens(tokenStrings);
     */
    async revokeTokens(accessTokens: string[]): Promise<TokenRevokeResponse> {
        if (!accessTokens || accessTokens.length === 0) {
            throw new Error('Must provide at least one token to revoke');
        }

        if (accessTokens.length > 15) {
            throw new Error('Maximum 15 tokens can be revoked per request');
        }

        // Check for duplicates
        const uniqueTokens = Array.from(new Set(accessTokens));
        if (uniqueTokens.length !== accessTokens.length) {
            throw new Error('Duplicate tokens provided. Each token must be unique');
        }

        try {
            const response = await axios.post<TokenRevokeResponse>(
                `${this.baseUrl}${this.revokeEndpoint}`,
                {
                    client_id: this.credentials.clientId,
                    client_secret: this.credentials.clientSecret,
                    access_tokens: accessTokens
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(`[OAuth Token Manager] Revoked ${response.data.revoked_count} tokens`);

            // Clear current token if it was revoked
            if (this.currentToken && accessTokens.includes(this.currentToken.access_token)) {
                this.currentToken = undefined;
                this.tokenExpiresAt = undefined;
                console.log('[OAuth Token Manager] Current token was revoked, cleared from cache');
            }

            return response.data;
        } catch (error: any) {
            const message = error.response?.data?.error || error.message || 'Failed to revoke tokens';
            console.error(`[OAuth Token Manager] Failed to revoke tokens: ${message}`);
            throw new Error(`Failed to revoke OAuth tokens: ${message}`);
        }
    }

    /**
     * Revoke all active tokens for this client
     *
     * @example
     * await tokenManager.revokeAllTokens();
     */
    async revokeAllTokens(): Promise<void> {
        console.log('[OAuth Token Manager] Revoking all active tokens...');

        let totalRevoked = 0;
        let nextToken: string | undefined;

        do {
            const response = await this.listTokens(nextToken);
            const tokenStrings = response.tokens.map(t => t.token);

            if (tokenStrings.length > 0) {
                // Revoke in batches of 15 (API limit)
                for (let i = 0; i < tokenStrings.length; i += 15) {
                    const batch = tokenStrings.slice(i, i + 15);
                    const result = await this.revokeTokens(batch);
                    totalRevoked += result.revoked_count;
                }
            }

            nextToken = response.next;
        } while (nextToken);

        console.log(`[OAuth Token Manager] Revoked ${totalRevoked} tokens total`);
    }

    /**
     * Get the current token without refreshing
     * Returns undefined if no token exists
     */
    getCurrentToken(): OAuth2Token | undefined {
        return this.currentToken;
    }

    /**
     * Clear the cached token (forces regeneration on next request)
     */
    clearToken(): void {
        this.currentToken = undefined;
        this.tokenExpiresAt = undefined;
        console.log('[OAuth Token Manager] Token cache cleared');
    }

    /**
     * Create a Configuration object with OAuth token for use with API classes
     *
     * @returns Promise<Configuration>
     *
     * @example
     * const tokenManager = new OAuthTokenManager({
     *   clientId: 'YOUR_API_KEY',
     *   clientSecret: 'YOUR_CLIENT_SECRET'
     * });
     *
     * const config = await tokenManager.createOAuthConfiguration();
     * const api = new CarSearchApi(config);
     *
     * // API calls will automatically use OAuth token with /oauth/v2/ base path
     * const results = await api.searchCarActive({ make: ['Honda'] });
     */
    async createOAuthConfiguration(): Promise<Configuration> {
        const { Configuration } = require('../configuration');

        // Get a valid token
        const token = await this.getValidToken();

        return new Configuration({
            accessToken: token,
            basePath: `${this.baseUrl}/oauth/v2`  // OAuth uses different base path
        });
    }
}
