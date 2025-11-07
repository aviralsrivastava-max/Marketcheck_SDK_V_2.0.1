# RVSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoCompleteRv**](#autocompleterv) | **GET** /search/rv/auto-complete | API for auto-completion of inputs|
|[**getRvListing**](#getrvlisting) | **GET** /listing/rv/{id} | RV listing by id|
|[**getRvListingExtra**](#getrvlistingextra) | **GET** /listing/rv/{id}/extra | Long text RV Listings attributes for Listing with the given id|
|[**getRvListingMedia**](#getrvlistingmedia) | **GET** /listing/rv/{id}/media | Listing media by id|
|[**getRvUkListing**](#getrvuklisting) | **GET** /listing/rv/uk/{id} | RV listing by id|
|[**getRvUkListingExtra**](#getrvuklistingextra) | **GET** /listing/rv/uk/{id}/extra | Long text RV Listings attributes for Listing with the given id|
|[**getRvUkListingMedia**](#getrvuklistingmedia) | **GET** /listing/rv/uk/{id}/media | Listing media by id|
|[**searchRvActive**](#searchrvactive) | **GET** /search/rv/active | Gets active RV listings for the given search criteria|
|[**searchRvUkActive**](#searchrvukactive) | **GET** /search/rv/uk/active | Gets active RV listings for the given search criteria|

# **autoCompleteRv**
> SearchAutoCompleteResponse autoCompleteRv()

Auto-complete the inputs of your end users

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let field: 'make' | 'model' | 'trim' | 'class' | 'transmission' | 'fuel_type' | 'exterior_color' | 'interior_color' | 'engine' | 'state' | 'city'; //Field name for which you want auto-completion (default to undefined)
let input: string; //Input entered so far (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let color: Array<string>; //Color of the vehicle (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let inventoryType: 'used' | 'new'; //To filter listing on their condition. Either used or new (optional) (default to undefined)
let ignoreCase: boolean; //Boolean variable to indicate ignore case of current input (optional) (default to true)
let termCounts: boolean; //Boolean variable to indicate wheather to include term counts as well in response (optional) (default to false)
let sortBy: 'index' | 'count'; //Sort the response, either by index or count(default) (optional) (default to 'index')
let sellerType: string; //seller type for autocomplete (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let facetMinCount: number; //Provide minimum count value for facets (optional) (default to 1)

const { status, data } = await apiInstance.autoCompleteRv(
    field,
    input,
    apiKey,
    year,
    make,
    model,
    trim,
    bodyType,
    vehicleType,
    transmission,
    drivetrain,
    fuelType,
    color,
    engine,
    state,
    city,
    inventoryType,
    ignoreCase,
    termCounts,
    sortBy,
    sellerType,
    radius,
    zip,
    facetMinCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **field** | [**&#39;make&#39; | &#39;model&#39; | &#39;trim&#39; | &#39;class&#39; | &#39;transmission&#39; | &#39;fuel_type&#39; | &#39;exterior_color&#39; | &#39;interior_color&#39; | &#39;engine&#39; | &#39;state&#39; | &#39;city&#39;**]**Array<&#39;make&#39; &#124; &#39;model&#39; &#124; &#39;trim&#39; &#124; &#39;class&#39; &#124; &#39;transmission&#39; &#124; &#39;fuel_type&#39; &#124; &#39;exterior_color&#39; &#124; &#39;interior_color&#39; &#124; &#39;engine&#39; &#124; &#39;state&#39; &#124; &#39;city&#39;>** | Field name for which you want auto-completion | defaults to undefined|
| **input** | [**string**] | Input entered so far | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **color** | **Array&lt;string&gt;** | Color of the vehicle | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **inventoryType** | [**&#39;used&#39; | &#39;new&#39;**]**Array<&#39;used&#39; &#124; &#39;new&#39;>** | To filter listing on their condition. Either used or new | (optional) defaults to undefined|
| **ignoreCase** | [**boolean**] | Boolean variable to indicate ignore case of current input | (optional) defaults to true|
| **termCounts** | [**boolean**] | Boolean variable to indicate wheather to include term counts as well in response | (optional) defaults to false|
| **sortBy** | [**&#39;index&#39; | &#39;count&#39;**]**Array<&#39;index&#39; &#124; &#39;count&#39;>** | Sort the response, either by index or count(default) | (optional) defaults to 'index'|
| **sellerType** | [**string**] | seller type for autocomplete | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **facetMinCount** | [**number**] | Provide minimum count value for facets | (optional) defaults to 1|


### Return type

**SearchAutoCompleteResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unique terms available in given field for auto completion |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvListing**
> RVListing getRvListing()

Get a particular RV listing by its id

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvListing(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**RVListing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | RV listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvListingExtra**
> ListingExtraAttributes getRvListingExtra()

Get RV listing options, features, seller comments

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvListingExtra(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**ListingExtraAttributes**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | RV ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvListingMedia**
> ListingMedia getRvListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvListingMedia(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**ListingMedia**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing Media for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvUkListing**
> RVListing getRvUkListing()

Get a particular RV listing by its id

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvUkListing(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**RVListing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | RV listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvUkListingExtra**
> ListingExtraAttributes getRvUkListingExtra()

Get RV listing options, features, seller comments

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvUkListingExtra(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**ListingExtraAttributes**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | RV ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRvUkListingMedia**
> ListingMedia getRvUkListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getRvUkListingMedia(
    id,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**ListingMedia**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing Media for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRvActive**
> RVSearchResponse searchRvActive()

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search RV around a given geo-point within a given radius  2. Search RV for a specific year / make / model or combination of these  3. Search RV matching multiple year, make, model combinatins in the same search request 4. Filter results by most RV specification attributes 5. Filter RV within a given price / miles range 6. Specify a sort order for the results on price / miles / listed date  7. Search RV for a given City / State combination  8. Get Facets to build the search drill downs  9. Get Market averages for price/miles for your search

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let searchText: string; //To search a substring across entire document (optional) (default to undefined)
let tokenizedSearchText: string; //To search a substring (tokenized) across long_text_copy_field field (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let modelO: Array<string>; //To filter listings on their model orig (as described on the webpage) (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let inventoryType: 'used' | 'new'; //To filter listing on their condition. Either used or new (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let _class: string; //Filter RV listings on class (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let slideouts: string; //Filter RV listings on slideouts (optional) (default to undefined)
let lengthRange: string; //length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200 (optional) (default to undefined)
let length: string; //Filter RV listings on length (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let freshWaterCapacity: string; //To filter on fresh water capacity of vehicle (optional) (default to undefined)
let sleeps: string; //To filter data based on sleeps (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let numberOfAwnings: Array<string>; //To filter on number_of_awnings (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let gvwr: string; //To filter on the maximum total weight of your vehicle (optional) (default to undefined)

const { status, data } = await apiInstance.searchRvActive(
    apiKey,
    priceRange,
    milesRange,
    msrpRange,
    yearRange,
    searchText,
    tokenizedSearchText,
    latitude,
    longitude,
    radius,
    year,
    make,
    model,
    modelO,
    vin,
    inventoryType,
    stockNo,
    source,
    dealerName,
    dealerId,
    exteriorColor,
    interiorColor,
    engine,
    fuelType,
    transmission,
    _class,
    state,
    city,
    zip,
    msaCode,
    sortBy,
    sortOrder,
    rows,
    start,
    facets,
    rangeFacets,
    facetSort,
    stats,
    lastSeenRange,
    firstSeenRange,
    lastSeenDays,
    firstSeenDays,
    slideouts,
    lengthRange,
    length,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    seatingCapacity,
    freshWaterCapacity,
    sleeps,
    cylinders,
    numberOfAwnings,
    doors,
    gvwr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **searchText** | [**string**] | To search a substring across entire document | (optional) defaults to undefined|
| **tokenizedSearchText** | [**string**] | To search a substring (tokenized) across long_text_copy_field field | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **modelO** | **Array&lt;string&gt;** | To filter listings on their model orig (as described on the webpage) | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **inventoryType** | [**&#39;used&#39; | &#39;new&#39;**]**Array<&#39;used&#39; &#124; &#39;new&#39;>** | To filter listing on their condition. Either used or new | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **_class** | [**string**] | Filter RV listings on class | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **slideouts** | [**string**] | Filter RV listings on slideouts | (optional) defaults to undefined|
| **lengthRange** | [**string**] | length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200 | (optional) defaults to undefined|
| **length** | [**string**] | Filter RV listings on length | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **freshWaterCapacity** | [**string**] | To filter on fresh water capacity of vehicle | (optional) defaults to undefined|
| **sleeps** | [**string**] | To filter data based on sleeps | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **numberOfAwnings** | **Array&lt;string&gt;** | To filter on number_of_awnings | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **gvwr** | [**string**] | To filter on the maximum total weight of your vehicle | (optional) defaults to undefined|


### Return type

**RVSearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all RV listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRvUkActive**
> UKRVSearchResponse searchRvUkActive()

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search RV around a given geo-point within a given radius  2. Search RV for a specific year / make / model or combination of these  3. Search RV matching multiple year, make, model combinatins in the same search request 4. Filter results by most RV specification attributes 5. Filter RV within a given price / miles range 6. Specify a sort order for the results on price / miles / listed date  7. Search RV for a given City / State combination  8. Get Facets to build the search drill downs  9. Get Market averages for price/miles for your search

### Example

```typescript
import {
    RVSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RVSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let searchText: string; //To search a substring across entire document (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let category: string; //Filter RV listings on category (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let county: string; //To filter listing on county in which they are listed (optional) (default to undefined)
let postalCode: string; //To filter listing on postal code around which they are listed (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let mtplm: string; //To filter rv on mtplm (optional) (default to undefined)
let subCategory: string; //To filter rv on their sub-category (optional) (default to undefined)
let availabilityStatus: string; //To filter rv on their availability_status (optional) (default to undefined)
let berths: string; //To filter rv on their berths (optional) (default to undefined)
let inventoryType: 'used' | 'new'; //To filter listing on their condition. Either used or new (optional) (default to undefined)
let widthRange: string; //width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8 (optional) (default to undefined)
let exteriorLengthRange: string; //width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8 (optional) (default to undefined)
let interiorLengthRange: string; //width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8 (optional) (default to undefined)
let driveType: string; //To filter rv on their drive_type (optional) (default to undefined)
let steering: string; //To filter rv on their steering (optional) (default to undefined)
let chassis: string; //To filter rv on their chassis (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)

const { status, data } = await apiInstance.searchRvUkActive(
    apiKey,
    priceRange,
    milesRange,
    msrpRange,
    yearRange,
    searchText,
    latitude,
    longitude,
    radius,
    year,
    make,
    model,
    vin,
    source,
    dealerName,
    dealerId,
    exteriorColor,
    interiorColor,
    engineSize,
    fuelType,
    category,
    state,
    city,
    county,
    postalCode,
    zip,
    sortBy,
    sortOrder,
    rows,
    start,
    facets,
    rangeFacets,
    facetSort,
    stats,
    lastSeenRange,
    firstSeenRange,
    lastSeenDays,
    firstSeenDays,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    seatingCapacity,
    cylinders,
    doors,
    mtplm,
    subCategory,
    availabilityStatus,
    berths,
    inventoryType,
    widthRange,
    exteriorLengthRange,
    interiorLengthRange,
    driveType,
    steering,
    chassis,
    transmission
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **searchText** | [**string**] | To search a substring across entire document | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **category** | [**string**] | Filter RV listings on category | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **county** | [**string**] | To filter listing on county in which they are listed | (optional) defaults to undefined|
| **postalCode** | [**string**] | To filter listing on postal code around which they are listed | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **mtplm** | [**string**] | To filter rv on mtplm | (optional) defaults to undefined|
| **subCategory** | [**string**] | To filter rv on their sub-category | (optional) defaults to undefined|
| **availabilityStatus** | [**string**] | To filter rv on their availability_status | (optional) defaults to undefined|
| **berths** | [**string**] | To filter rv on their berths | (optional) defaults to undefined|
| **inventoryType** | [**&#39;used&#39; | &#39;new&#39;**]**Array<&#39;used&#39; &#124; &#39;new&#39;>** | To filter listing on their condition. Either used or new | (optional) defaults to undefined|
| **widthRange** | [**string**] | width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8 | (optional) defaults to undefined|
| **exteriorLengthRange** | [**string**] | width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8 | (optional) defaults to undefined|
| **interiorLengthRange** | [**string**] | width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8 | (optional) defaults to undefined|
| **driveType** | [**string**] | To filter rv on their drive_type | (optional) defaults to undefined|
| **steering** | [**string**] | To filter rv on their steering | (optional) defaults to undefined|
| **chassis** | [**string**] | To filter rv on their chassis | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|


### Return type

**UKRVSearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all RV listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

