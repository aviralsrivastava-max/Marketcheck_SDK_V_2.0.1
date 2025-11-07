# Advanced Features

This SDK includes several advanced features that enhance the developer experience:

## Table of Contents

1. [Dual Authentication Support](#dual-authentication-support)
2. [Automatic Rate Limiting](#automatic-rate-limiting)
3. [Auto-Pagination](#auto-pagination)
4. [Error Handling](#error-handling)

---

## Dual Authentication Support

The SDK supports two authentication methods that can be used interchangeably based on your security requirements.

### 1. API Key Authentication (Simple)

Best for development and simple integrations. The API key is passed as a query parameter.

```typescript
import { Configuration, CarSearchApi } from 'marketcheck-api-sdk';

const config = new Configuration({
    apiKey: 'YOUR_API_KEY'
});

const api = new CarSearchApi(config);
```

**Base URL:** `https://api.marketcheck.com/v2`

**Pros:**
- Simple to implement
- No token management required
- Good for development/testing

**Cons:**
- API key visible in URLs (query parameter)
- No token expiration
- Less secure for production environments

### 2. OAuth 2.0 Authentication (Recommended for Production)

Provides enhanced security with time-limited access tokens and automatic refresh.

```typescript
import { OAuthTokenManager, CarSearchApi } from 'marketcheck-api-sdk';

// Create token manager
const tokenManager = new OAuthTokenManager({
    clientId: 'YOUR_API_KEY',
    clientSecret: 'YOUR_CLIENT_SECRET'
});

// Generate OAuth configuration (auto-generates token)
const config = await tokenManager.createOAuthConfiguration();

// Use with any API
const api = new CarSearchApi(config);
const response = await api.searchCarActive({
    make: ['Toyota'],
    model: ['Camry']
});
```

**Base URL:** `https://api.marketcheck.com/oauth/v2`

**OAuth Token Lifecycle:**
- **Token Duration:** 6 hours (21,600 seconds)
- **Auto-refresh:** SDK automatically refreshes 5 minutes before expiration
- **Token Caching:** Tokens are cached and reused until expiration

**Benefits:**
- Enhanced security (tokens in headers, not URLs)
- Automatic token refresh
- Token revocation support
- Better audit trail
- Compliance with OAuth 2.0 standards

### OAuth Token Management

The `OAuthTokenManager` provides full control over token lifecycle:

#### Generate Token

```typescript
const token = await tokenManager.generateToken();
console.log(token.access_token);
console.log(token.expires_in); // 21600 (6 hours)
```

#### Get Valid Token (Auto-refresh)

```typescript
// Automatically refreshes if expired
const token = await tokenManager.getValidToken();
```

#### List Active Tokens

```typescript
const tokens = await tokenManager.listTokens();
console.log(`Active tokens: ${tokens.tokens.length}`);

tokens.tokens.forEach(t => {
    console.log(`Token: ${t.token}`);
    console.log(`Created: ${t.created_at}`);
    console.log(`Expires: ${t.expires_at}`);
    console.log(`Active: ${t.is_active}`);
});
```

#### Revoke Tokens

```typescript
// Revoke specific tokens (max 15 per request)
await tokenManager.revokeTokens(['token1', 'token2']);

// Revoke all active tokens
await tokenManager.revokeAllTokens();
```

#### Clear Token Cache

```typescript
// Force regeneration on next request
tokenManager.clearToken();
```

---

## Automatic Rate Limiting

The SDK includes an intelligent rate limit manager that prevents your application from exceeding API limits.

### How It Works

1. **Automatic Detection:** Learns rate limits from API response headers
2. **Request Queuing:** Queues requests when limit is reached
3. **Auto-resume:** Automatically resumes when rate limit resets
4. **Concurrent Control:** Manages concurrent request limits

### API Tier Detection

The SDK automatically detects your API tier and optimizes accordingly:

| Tier | Rate Limit | Quota | Max Concurrent | Safety Buffer |
|------|-----------|-------|----------------|---------------|
| **FREE** | 5 req/sec | 500/month | 1 | 0 |
| **BASIC** | 5 req/sec | 5,000/month | 1 | 0 |
| **STANDARD** | 40 req/sec | Unlimited | 12 | 4 (10%) |
| **ENTERPRISE** | 100+ req/sec | Unlimited | 30+ | 10+ (10%) |

### Safety Buffer

For STANDARD and ENTERPRISE tiers, the SDK uses a **safety buffer** to prevent race conditions:

**Problem:** When multiple requests are in-flight, the server's `remaining` count hasn't been updated yet, which can lead to rate limit violations.

**Solution:** The SDK calculates `effectiveRemaining = remaining - executing` and stops sending when it hits the buffer threshold.

**Example (STANDARD tier):**
```
Rate limit: 40 req/sec
Safety buffer: 4 (10% of 40)
In-flight requests: 12

Server says: remaining = 30
Effective remaining: 30 - 12 = 18 (still safe)

If remaining drops to 15:
Effective remaining: 15 - 12 = 3 (below buffer of 4)
SDK stops sending and waits for reset
```

### Rate Limit Headers

The SDK reads these headers from API responses:

```
ratelimit-limit: 40
ratelimit-remaining: 35
ratelimit-reset-time: 2024-01-15T10:30:00Z
quota-limit: null (or number for FREE/BASIC)
quota-remaining: null (or number for FREE/BASIC)
```

### Handling Rate Limit Errors

The SDK automatically handles 429 (Too Many Requests) errors:

```typescript
try {
    const response = await api.searchCarActive({
        make: ['Toyota']
    });
} catch (error) {
    if (error.response?.status === 429) {
        // SDK will automatically queue and retry
        // You can also implement custom backoff logic here
        console.error('Rate limit exceeded. SDK will auto-retry.');
    }
}
```

### No Action Required

Rate limiting is handled automatically. You don't need to:
- Track request counts
- Implement delays
- Handle rate limit errors
- Manage request queues

Just make your API calls normally, and the SDK handles the rest!

---

## Auto-Pagination

Several search endpoints support automatic pagination to fetch more than 50 results per request.

### Supported Endpoints

Auto-pagination is available for these endpoints:

#### Car Search Endpoints
- `searchCarActive` - Active car listings
- `searchCarAuctionActive` - Active auction car listings
- `searchCarFsboActive` - Active private party car listings
- `searchCarRecents` - Recent car listings
- `getCarUkActive` - Active UK car listings

#### RV Search Endpoints
- `searchRvActive` - Active RV listings
- `searchRvUkActive` - Active UK RV listings

### How to Enable

Add these parameters to any supported endpoint:

```typescript
const response = await api.searchCarActive({
    make: ['Toyota'],
    model: ['Camry'],
    enableAutoPagination: true,  // Enable auto-pagination
    totalResults: 500             // Fetch exactly 500 results (optional)
});
```

### Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `enableAutoPagination` | `boolean` | Enable automatic pagination | Yes |
| `totalResults` | `number` | Total number of results to fetch | No |

**If `totalResults` is not specified:**
- SDK fetches up to tier limit (10,000 for Standard, unlimited for Enterprise)

**If `totalResults` is specified:**
- SDK fetches exactly that many results
- Limited by tier maximum

### Pagination Limits by Tier

| Tier | Max per Page | Max Total Results |
|------|--------------|-------------------|
| FREE | 50 | 10,000 |
| BASIC | 50 | 10,000 |
| STANDARD | 50 | 10,000 |
| ENTERPRISE | 50 | Unlimited |

### Response Structure

Auto-pagination returns all results in a single response:

```typescript
const response = await api.searchCarActive({
    make: ['Toyota'],
    enableAutoPagination: true,
    totalResults: 500
});

// Access all listings
console.log(response.data.listings.length); // 500

// Access metadata
console.log(response.data.num_found);       // Total available in database

// Access pagination metadata
console.log(response.data._meta.pagination);
// {
//   total_fetched: 500,
//   pages_processed: 10,
//   has_more: true
// }

// Access facets (preserved from first page)
console.log(response.data.facets);
console.log(response.data.stats);
console.log(response.data.range_facets);
```

### Features

- **Parallel Fetching:** Fetches multiple pages concurrently for speed
- **Rate Limit Aware:** Respects your API tier rate limits
- **Facets Preserved:** First page facets, stats, and range_facets are maintained
- **Progress Logging:** Shows progress during pagination
- **Error Handling:** Graceful handling of pagination limit errors

### Progress Logging

The SDK logs progress during pagination:

```
[MarketCheck SDK Pagination] Found 2500 total results available
[MarketCheck SDK Pagination] Will fetch 500 results
[MarketCheck SDK Pagination] Need 10 pages total
[MarketCheck SDK Pagination] Fetching batch: pages 2-4
[MarketCheck SDK Pagination] Progress: 200/500 results
[MarketCheck SDK Pagination] ✅ Completed! Fetched 500/2500 results across 10 pages
```

### Advanced Usage

#### With Facets

```typescript
const response = await api.searchCarActive({
    make: ['Toyota'],
    model: ['Camry'],
    year: ['2020', '2021'],
    zip: '90210',
    radius: 50,
    facets: 'make,model,year,trim',
    enableAutoPagination: true,
    totalResults: 1000
});

// All 1000 listings
console.log(response.data.listings.length);

// Facets from first page (aggregated stats)
console.log(response.data.facets.trim);
```

#### Handling Pagination Limit Errors

When a query is too broad, the API may return a 422 error:

```typescript
try {
    const response = await api.searchCarActive({
        make: ['Toyota'],  // Very broad query
        enableAutoPagination: true,
        totalResults: 10000
    });
} catch (error) {
    if (error.response?.status === 422) {
        // Pagination limit reached
        // SDK suggests: add more specific filters
        console.log('Query too broad. Try adding more filters.');
    }
}
```

**Suggestions when 422 occurs:**
- Add more specific filters (model, trim, location, price range)
- Break into multiple smaller queries by model or state
- Use date ranges (first_seen_at, last_seen_at) to narrow results

---

## Error Handling

The SDK provides comprehensive error handling with specific HTTP status codes.

### Common Error Status Codes

| Status Code | Meaning | How to Handle |
|------------|---------|---------------|
| **401** | Unauthorized | Check API key or OAuth token |
| **403** | Forbidden | Check API permissions |
| **422** | Unprocessable Entity | Pagination limit reached, add more filters |
| **429** | Too Many Requests | Rate limit exceeded (SDK auto-handles) |
| **500** | Internal Server Error | Retry after a delay |

### Error Handling Pattern

```typescript
try {
    const response = await api.searchCarActive({
        make: ['Toyota'],
        enableAutoPagination: true,
        totalResults: 500
    });

    console.log(response.data.listings);

} catch (error) {
    // Authentication errors
    if (error.response?.status === 401) {
        console.error('Authentication failed. Check your API key.');
        // Re-generate token or check credentials
    }

    // Pagination limit errors
    else if (error.response?.status === 422) {
        console.error('Pagination limit reached. Try more specific filters.');
        // Add more filters or reduce totalResults
    }

    // Rate limit errors
    else if (error.response?.status === 429) {
        console.error('Rate limit exceeded. SDK will auto-retry.');
        // SDK handles this automatically
        // Optionally implement custom backoff
    }

    // Server errors
    else if (error.response?.status >= 500) {
        console.error('Server error. Retry after delay.');
        // Implement retry logic
    }

    // Other errors
    else {
        console.error('Error:', error.message);
    }
}
```

### OAuth-specific Errors

```typescript
try {
    const tokenManager = new OAuthTokenManager({
        clientId: 'YOUR_API_KEY',
        clientSecret: 'YOUR_CLIENT_SECRET'
    });

    const token = await tokenManager.generateToken();

} catch (error) {
    console.error('OAuth Error:', error.message);
    // Check credentials
    // Check network connectivity
}
```

### Axios Error Structure

All errors follow Axios error structure:

```typescript
{
    message: string,
    response: {
        status: number,
        statusText: string,
        data: {
            error: string,
            error_description?: string
        },
        headers: {}
    },
    request: {},
    config: {}
}
```

---

## Best Practices

### 1. Use OAuth in Production

```typescript
// ✅ Production
const tokenManager = new OAuthTokenManager({
    clientId: process.env.API_KEY,
    clientSecret: process.env.CLIENT_SECRET
});
const config = await tokenManager.createOAuthConfiguration();

// ❌ Development only
const config = new Configuration({ apiKey: 'YOUR_API_KEY' });
```

### 2. Handle Errors Gracefully

```typescript
try {
    const response = await api.searchCarActive({ make: ['Toyota'] });
} catch (error) {
    // Specific error handling
    if (error.response?.status === 401) {
        // Handle auth error
    }
}
```

### 3. Use Auto-Pagination for Large Result Sets

```typescript
// ✅ For large datasets
const response = await api.searchCarActive({
    make: ['Toyota'],
    enableAutoPagination: true,
    totalResults: 1000
});

// ❌ Manual pagination
for (let i = 0; i < 20; i++) {
    await api.searchCarActive({ start: i * 50, rows: 50 });
}
```

### 4. Add Specific Filters

```typescript
// ✅ Specific query
const response = await api.searchCarActive({
    make: ['Toyota'],
    model: ['Camry'],
    year: ['2020', '2021'],
    zip: '90210',
    radius: 50,
    enableAutoPagination: true
});

// ❌ Too broad (may hit 422 error)
const response = await api.searchCarActive({
    enableAutoPagination: true,
    totalResults: 10000
});
```

### 5. Let Rate Limiting Work

```typescript
// ✅ SDK handles rate limiting
Promise.all([
    api.searchCarActive({ make: ['Toyota'] }),
    api.searchCarActive({ make: ['Honda'] }),
    api.searchCarActive({ make: ['Ford'] })
]);

// ❌ Manual delays not needed
await api.searchCarActive({ make: ['Toyota'] });
await delay(1000); // Unnecessary!
await api.searchCarActive({ make: ['Honda'] });
```

---

## Complete Example

```typescript
import { OAuthTokenManager, CarSearchApi } from 'marketcheck-api-sdk';

async function searchCars() {
    try {
        // 1. Setup OAuth authentication
        const tokenManager = new OAuthTokenManager({
            clientId: process.env.API_KEY!,
            clientSecret: process.env.CLIENT_SECRET!
        });

        const config = await tokenManager.createOAuthConfiguration();
        const api = new CarSearchApi(config);

        // 2. Search with auto-pagination
        const response = await api.searchCarActive({
            make: ['Toyota'],
            model: ['Camry'],
            year: ['2020', '2021', '2022'],
            zip: '90210',
            radius: 50,
            facets: 'trim,exterior_color',
            enableAutoPagination: true,
            totalResults: 500
        });

        // 3. Process results
        console.log(`Found ${response.data.num_found} total listings`);
        console.log(`Fetched ${response.data.listings.length} listings`);

        // Access facets
        console.log('Available trims:', response.data.facets?.trim);

        // Process each listing
        response.data.listings.forEach(listing => {
            console.log(`${listing.year} ${listing.make} ${listing.model}`);
            console.log(`Price: $${listing.price}`);
            console.log(`Miles: ${listing.miles}`);
            console.log(`VIN: ${listing.vin}`);
        });

    } catch (error: any) {
        // 4. Handle errors
        if (error.response?.status === 401) {
            console.error('Authentication failed');
        } else if (error.response?.status === 422) {
            console.error('Query too broad, add more filters');
        } else {
            console.error('Error:', error.message);
        }
    }
}

searchCars();
```

---

## Need Help?

- **API Documentation:** https://www.marketcheck.com/automotive/api/documentation
- **SDK Repository:** https://github.com/MarketcheckHub/marketcheck_api2.0
- **Support:** Contact your MarketCheck representative
