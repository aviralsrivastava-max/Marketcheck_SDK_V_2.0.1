# OEMIncentiveSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchCarIncentive**](#searchcarincentive) | **GET** /search/car/incentive/{oem}/{zip} | Gets oem incentive listings for the given zip code along with query params provided|
|[**searchCarIncentiveOem**](#searchcarincentiveoem) | **GET** /search/car/incentive/oem | Gets oem incentive listings for the given search criteria|

# **searchCarIncentive**
> SearchResponse searchCarIncentive()

This endpoint is an extension of the core incentive search API, specifically designed to return OEM incentive data for cars within a specified ZIP code.It allows users to get relevant incentive information for vehicles located in a particular geographic area, based on the given ZIP code.The API enables the following use cases:1.Retrieve OEM incentives for cars within a specific ZIP code. 2.Filter cars by their proximity to the provided ZIP code.3.Search cars based on year, make, model, and other attributes, limited to the given ZIP code region.4.Get market averages for price, miles within the specified ZIP code. 5.Sort the results based on various attributes such as price, miles, or listed date for cars in the given ZIP code area.

### Example

```typescript
import {
    OEMIncentiveSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OEMIncentiveSearchApi(configuration);

let zip: string; //To filter listing on ZIP around which they are listed (default to undefined)
let oem: string; //To filter listings on their make (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let baseSha: string; //SHA of offer to be used as base for comparison (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let msaCode: string; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let country: Array<string>; //To filter listing on Country in which they are listed (optional) (default to undefined)
let scrapedAtDateRange: string; //Scraped at date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let statusDateRange: string; //status_date date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let offerType: 'lease' | 'finance' | 'cash'; //The type of the incentive (optional) (default to undefined)
let year: string; //To filter listing on their year (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let model: string; //To filter listings on their model (optional) (default to undefined)
let trim: string; //To filter listing on their trim (optional) (default to undefined)
let transmission: string; //To filter listing on their transmission (optional) (default to undefined)
let drivetrain: string; //To filter listing on their drivetrain (optional) (default to undefined)
let engine: string; //To filter listing on their engine (optional) (default to undefined)
let fuelType: string; //To filter listing on their fuel type (optional) (default to undefined)
let monthlyRange: string; //To filter listing on Monthly payment amount, usually populated in Lease offers (optional) (default to undefined)
let aprRange: string; //APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let termRange: string; //Term for finance offer (optional) (default to undefined)
let termUnit: string; //term unit e.g. month, year (optional) (default to undefined)
let cashbackAmountRange: string; //To filter listing on cashback amounts listed in offer (optional) (default to undefined)
let cashbackTargetGroup: string; //To filter listing on the demographic or any other entity for whom this cashback offer is for, like Military, Grad students Current owners etc (optional) (default to undefined)
let dueAtSigningRange: string; //To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let downPaymentRange: string; //To filter listing on down payment offer on car (optional) (default to undefined)
let securityDepositRange: string; //To filter listing on security deposit required for the offer (optional) (default to undefined)
let totalMonthlyPaymentsRange: string; //Sum of all the monthly payments made over the duration of offer term. This is only populated if the offer mentions it, it is not calculated based on the monthly and term.  (optional) (default to undefined)
let dealerContributionRange: string; //To filter listing on any contribution from dealer\'s side (optional) (default to undefined)
let acquisitionFeeRange: string; //To filter listing on acquisition fee of the car (optional) (default to undefined)
let dispositionFeeRange: string; //To filter listing on disposition fee of the car (optional) (default to undefined)
let mileageLimitRange: string; //To filter listing on mileage limit the offer is valid up to under the default clauses (optional) (default to undefined)
let overMileageFeeRange: string; //Mileage charge overlimit surcharge in USD (optional) (default to undefined)
let leaseEndPurchasePriceRange: string; //Cars residual value at the end of offer term (optional) (default to undefined)
let netCapCostRange: string; //To filter listing on net capitalised cost of the car (optional) (default to undefined)
let grossCapCostRange: string; //To filter listing on gross capitalised cost of the car (optional) (default to undefined)
let validFromRange: string; //To filter listing on valid from date of the offer (optional) (default to undefined)
let validThroughRange: string; //To filter listing on valid through date of the offer (optional) (default to undefined)
let searchOffersText: string; //To search a substring across offer (optional) (default to undefined)
let searchTitlesText: string; //To search a substring across titles (optional) (default to undefined)
let searchDisclaimersText: string; //To search a substring across disclaimers (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarIncentive(
    zip,
    oem,
    apiKey,
    baseSha,
    dealerId,
    source,
    msaCode,
    city,
    state,
    country,
    scrapedAtDateRange,
    statusDateRange,
    offerType,
    year,
    yearRange,
    model,
    trim,
    transmission,
    drivetrain,
    engine,
    fuelType,
    monthlyRange,
    aprRange,
    termRange,
    termUnit,
    cashbackAmountRange,
    cashbackTargetGroup,
    dueAtSigningRange,
    msrpRange,
    downPaymentRange,
    securityDepositRange,
    totalMonthlyPaymentsRange,
    dealerContributionRange,
    acquisitionFeeRange,
    dispositionFeeRange,
    mileageLimitRange,
    overMileageFeeRange,
    leaseEndPurchasePriceRange,
    netCapCostRange,
    grossCapCostRange,
    validFromRange,
    validThroughRange,
    searchOffersText,
    searchTitlesText,
    searchDisclaimersText,
    sortBy,
    sortOrder,
    rows,
    start,
    facets,
    rangeFacets,
    facetSort,
    stats
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | defaults to undefined|
| **oem** | [**string**] | To filter listings on their make | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **baseSha** | [**string**] | SHA of offer to be used as base for comparison | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **msaCode** | [**string**] | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **country** | **Array&lt;string&gt;** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **scrapedAtDateRange** | [**string**] | Scraped at date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **statusDateRange** | [**string**] | status_date date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **offerType** | [**&#39;lease&#39; | &#39;finance&#39; | &#39;cash&#39;**]**Array<&#39;lease&#39; &#124; &#39;finance&#39; &#124; &#39;cash&#39;>** | The type of the incentive | (optional) defaults to undefined|
| **year** | [**string**] | To filter listing on their year | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **model** | [**string**] | To filter listings on their model | (optional) defaults to undefined|
| **trim** | [**string**] | To filter listing on their trim | (optional) defaults to undefined|
| **transmission** | [**string**] | To filter listing on their transmission | (optional) defaults to undefined|
| **drivetrain** | [**string**] | To filter listing on their drivetrain | (optional) defaults to undefined|
| **engine** | [**string**] | To filter listing on their engine | (optional) defaults to undefined|
| **fuelType** | [**string**] | To filter listing on their fuel type | (optional) defaults to undefined|
| **monthlyRange** | [**string**] | To filter listing on Monthly payment amount, usually populated in Lease offers | (optional) defaults to undefined|
| **aprRange** | [**string**] | APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **termRange** | [**string**] | Term for finance offer | (optional) defaults to undefined|
| **termUnit** | [**string**] | term unit e.g. month, year | (optional) defaults to undefined|
| **cashbackAmountRange** | [**string**] | To filter listing on cashback amounts listed in offer | (optional) defaults to undefined|
| **cashbackTargetGroup** | [**string**] | To filter listing on the demographic or any other entity for whom this cashback offer is for, like Military, Grad students Current owners etc | (optional) defaults to undefined|
| **dueAtSigningRange** | [**string**] | To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **downPaymentRange** | [**string**] | To filter listing on down payment offer on car | (optional) defaults to undefined|
| **securityDepositRange** | [**string**] | To filter listing on security deposit required for the offer | (optional) defaults to undefined|
| **totalMonthlyPaymentsRange** | [**string**] | Sum of all the monthly payments made over the duration of offer term. This is only populated if the offer mentions it, it is not calculated based on the monthly and term.  | (optional) defaults to undefined|
| **dealerContributionRange** | [**string**] | To filter listing on any contribution from dealer\&#39;s side | (optional) defaults to undefined|
| **acquisitionFeeRange** | [**string**] | To filter listing on acquisition fee of the car | (optional) defaults to undefined|
| **dispositionFeeRange** | [**string**] | To filter listing on disposition fee of the car | (optional) defaults to undefined|
| **mileageLimitRange** | [**string**] | To filter listing on mileage limit the offer is valid up to under the default clauses | (optional) defaults to undefined|
| **overMileageFeeRange** | [**string**] | Mileage charge overlimit surcharge in USD | (optional) defaults to undefined|
| **leaseEndPurchasePriceRange** | [**string**] | Cars residual value at the end of offer term | (optional) defaults to undefined|
| **netCapCostRange** | [**string**] | To filter listing on net capitalised cost of the car | (optional) defaults to undefined|
| **grossCapCostRange** | [**string**] | To filter listing on gross capitalised cost of the car | (optional) defaults to undefined|
| **validFromRange** | [**string**] | To filter listing on valid from date of the offer | (optional) defaults to undefined|
| **validThroughRange** | [**string**] | To filter listing on valid through date of the offer | (optional) defaults to undefined|
| **searchOffersText** | [**string**] | To search a substring across offer | (optional) defaults to undefined|
| **searchTitlesText** | [**string**] | To search a substring across titles | (optional) defaults to undefined|
| **searchDisclaimersText** | [**string**] | To search a substring across disclaimers | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|


### Return type

**SearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all oem incentive listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarIncentiveOem**
> SearchResponse searchCarIncentiveOem()

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles range 7. Specify a sort order for the results on price / miles / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

```typescript
import {
    OEMIncentiveSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OEMIncentiveSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let baseSha: string; //SHA of offer to be used as base for comparison (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let msaCode: string; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let country: Array<string>; //To filter listing on Country in which they are listed (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let scrapedAtDateRange: string; //Scraped at date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let statusDateRange: string; //status_date date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let offerType: 'lease' | 'finance' | 'cash'; //The type of the incentive (optional) (default to undefined)
let year: string; //To filter listing on their year (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let make: string; //To filter listings on their make (optional) (default to undefined)
let model: string; //To filter listings on their model (optional) (default to undefined)
let trim: string; //To filter listing on their trim (optional) (default to undefined)
let transmission: string; //To filter listing on their transmission (optional) (default to undefined)
let drivetrain: string; //To filter listing on their drivetrain (optional) (default to undefined)
let engine: string; //To filter listing on their engine (optional) (default to undefined)
let fuelType: string; //To filter listing on their fuel type (optional) (default to undefined)
let monthlyRange: string; //To filter listing on Monthly payment amount, usually populated in Lease offers (optional) (default to undefined)
let aprRange: string; //APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let termRange: string; //Term for finance offer (optional) (default to undefined)
let termUnit: string; //term unit e.g. month, year (optional) (default to undefined)
let cashbackAmountRange: string; //To filter listing on cashback amounts listed in offer (optional) (default to undefined)
let cashbackTargetGroup: string; //To filter listing on the demographic or any other entity for whom this cashback offer is for, like Military, Grad students Current owners etc (optional) (default to undefined)
let dueAtSigningRange: string; //To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let downPaymentRange: string; //To filter listing on down payment offer on car (optional) (default to undefined)
let securityDepositRange: string; //To filter listing on security deposit required for the offer (optional) (default to undefined)
let totalMonthlyPaymentsRange: string; //Sum of all the monthly payments made over the duration of offer term. This is only populated if the offer mentions it, it is not calculated based on the monthly and term.  (optional) (default to undefined)
let dealerContributionRange: string; //To filter listing on any contribution from dealer\'s side (optional) (default to undefined)
let acquisitionFeeRange: string; //To filter listing on acquisition fee of the car (optional) (default to undefined)
let dispositionFeeRange: string; //To filter listing on disposition fee of the car (optional) (default to undefined)
let mileageLimitRange: string; //To filter listing on mileage limit the offer is valid up to under the default clauses (optional) (default to undefined)
let overMileageFeeRange: string; //Mileage charge overlimit surcharge in USD (optional) (default to undefined)
let leaseEndPurchasePriceRange: string; //Cars residual value at the end of offer term (optional) (default to undefined)
let netCapCostRange: string; //To filter listing on net capitalised cost of the car (optional) (default to undefined)
let grossCapCostRange: string; //To filter listing on gross capitalised cost of the car (optional) (default to undefined)
let validFromRange: string; //To filter listing on valid from date of the offer (optional) (default to undefined)
let validThroughRange: string; //To filter listing on valid through date of the offer (optional) (default to undefined)
let searchOffersText: string; //To search a substring across offer (optional) (default to undefined)
let searchTitlesText: string; //To search a substring across titles (optional) (default to undefined)
let searchDisclaimersText: string; //To search a substring across disclaimers (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarIncentiveOem(
    apiKey,
    baseSha,
    dealerId,
    source,
    zip,
    msaCode,
    city,
    state,
    country,
    latitude,
    longitude,
    radius,
    scrapedAtDateRange,
    statusDateRange,
    offerType,
    year,
    yearRange,
    make,
    model,
    trim,
    transmission,
    drivetrain,
    engine,
    fuelType,
    monthlyRange,
    aprRange,
    termRange,
    termUnit,
    cashbackAmountRange,
    cashbackTargetGroup,
    dueAtSigningRange,
    msrpRange,
    downPaymentRange,
    securityDepositRange,
    totalMonthlyPaymentsRange,
    dealerContributionRange,
    acquisitionFeeRange,
    dispositionFeeRange,
    mileageLimitRange,
    overMileageFeeRange,
    leaseEndPurchasePriceRange,
    netCapCostRange,
    grossCapCostRange,
    validFromRange,
    validThroughRange,
    searchOffersText,
    searchTitlesText,
    searchDisclaimersText,
    sortBy,
    sortOrder,
    rows,
    start,
    facets,
    rangeFacets,
    facetSort,
    stats
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **baseSha** | [**string**] | SHA of offer to be used as base for comparison | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **msaCode** | [**string**] | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **country** | **Array&lt;string&gt;** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **scrapedAtDateRange** | [**string**] | Scraped at date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **statusDateRange** | [**string**] | status_date date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **offerType** | [**&#39;lease&#39; | &#39;finance&#39; | &#39;cash&#39;**]**Array<&#39;lease&#39; &#124; &#39;finance&#39; &#124; &#39;cash&#39;>** | The type of the incentive | (optional) defaults to undefined|
| **year** | [**string**] | To filter listing on their year | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **make** | [**string**] | To filter listings on their make | (optional) defaults to undefined|
| **model** | [**string**] | To filter listings on their model | (optional) defaults to undefined|
| **trim** | [**string**] | To filter listing on their trim | (optional) defaults to undefined|
| **transmission** | [**string**] | To filter listing on their transmission | (optional) defaults to undefined|
| **drivetrain** | [**string**] | To filter listing on their drivetrain | (optional) defaults to undefined|
| **engine** | [**string**] | To filter listing on their engine | (optional) defaults to undefined|
| **fuelType** | [**string**] | To filter listing on their fuel type | (optional) defaults to undefined|
| **monthlyRange** | [**string**] | To filter listing on Monthly payment amount, usually populated in Lease offers | (optional) defaults to undefined|
| **aprRange** | [**string**] | APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **termRange** | [**string**] | Term for finance offer | (optional) defaults to undefined|
| **termUnit** | [**string**] | term unit e.g. month, year | (optional) defaults to undefined|
| **cashbackAmountRange** | [**string**] | To filter listing on cashback amounts listed in offer | (optional) defaults to undefined|
| **cashbackTargetGroup** | [**string**] | To filter listing on the demographic or any other entity for whom this cashback offer is for, like Military, Grad students Current owners etc | (optional) defaults to undefined|
| **dueAtSigningRange** | [**string**] | To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **downPaymentRange** | [**string**] | To filter listing on down payment offer on car | (optional) defaults to undefined|
| **securityDepositRange** | [**string**] | To filter listing on security deposit required for the offer | (optional) defaults to undefined|
| **totalMonthlyPaymentsRange** | [**string**] | Sum of all the monthly payments made over the duration of offer term. This is only populated if the offer mentions it, it is not calculated based on the monthly and term.  | (optional) defaults to undefined|
| **dealerContributionRange** | [**string**] | To filter listing on any contribution from dealer\&#39;s side | (optional) defaults to undefined|
| **acquisitionFeeRange** | [**string**] | To filter listing on acquisition fee of the car | (optional) defaults to undefined|
| **dispositionFeeRange** | [**string**] | To filter listing on disposition fee of the car | (optional) defaults to undefined|
| **mileageLimitRange** | [**string**] | To filter listing on mileage limit the offer is valid up to under the default clauses | (optional) defaults to undefined|
| **overMileageFeeRange** | [**string**] | Mileage charge overlimit surcharge in USD | (optional) defaults to undefined|
| **leaseEndPurchasePriceRange** | [**string**] | Cars residual value at the end of offer term | (optional) defaults to undefined|
| **netCapCostRange** | [**string**] | To filter listing on net capitalised cost of the car | (optional) defaults to undefined|
| **grossCapCostRange** | [**string**] | To filter listing on gross capitalised cost of the car | (optional) defaults to undefined|
| **validFromRange** | [**string**] | To filter listing on valid from date of the offer | (optional) defaults to undefined|
| **validThroughRange** | [**string**] | To filter listing on valid through date of the offer | (optional) defaults to undefined|
| **searchOffersText** | [**string**] | To search a substring across offer | (optional) defaults to undefined|
| **searchTitlesText** | [**string**] | To search a substring across titles | (optional) defaults to undefined|
| **searchDisclaimersText** | [**string**] | To search a substring across disclaimers | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|


### Return type

**SearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all oem incentive listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

