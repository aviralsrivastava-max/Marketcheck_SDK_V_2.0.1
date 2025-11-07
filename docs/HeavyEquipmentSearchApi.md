# HeavyEquipmentSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoComplete**](#autocomplete) | **GET** /search/heavy-equipment/auto-complete | API for auto-completion of inputs|
|[**getListing**](#getlisting) | **GET** /listing/heavy-equipment/{id} | Heavy equipment listing by id|
|[**getListingExtra**](#getlistingextra) | **GET** /listing/heavy-equipment/{id}/extra | Long text Heavy equipment Listings attributes for Listing with the given id|
|[**getListingMedia**](#getlistingmedia) | **GET** /listing/heavy-equipment/{id}/media | Listing media by id|
|[**searchActive**](#searchactive) | **GET** /search/heavy-equipment/active | Gets active heavy equipment listings for the given search criteria|

# **autoComplete**
> SearchAutoCompleteResponse autoComplete()

Auto-complete the inputs of your end users

### Example

```typescript
import {
    HeavyEquipmentSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HeavyEquipmentSearchApi(configuration);

let field: 'make' | 'model' | 'trim' | 'body_type' | 'transmission' | 'drivetrain' | 'fuel_type' | 'exterior_color' | 'interior_color' | 'engine' | 'category' | 'sub_category' | 'state' | 'city'; //Field name for which you want auto-completion (default to undefined)
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

const { status, data } = await apiInstance.autoComplete(
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
| **field** | [**&#39;make&#39; | &#39;model&#39; | &#39;trim&#39; | &#39;body_type&#39; | &#39;transmission&#39; | &#39;drivetrain&#39; | &#39;fuel_type&#39; | &#39;exterior_color&#39; | &#39;interior_color&#39; | &#39;engine&#39; | &#39;category&#39; | &#39;sub_category&#39; | &#39;state&#39; | &#39;city&#39;**]**Array<&#39;make&#39; &#124; &#39;model&#39; &#124; &#39;trim&#39; &#124; &#39;body_type&#39; &#124; &#39;transmission&#39; &#124; &#39;drivetrain&#39; &#124; &#39;fuel_type&#39; &#124; &#39;exterior_color&#39; &#124; &#39;interior_color&#39; &#124; &#39;engine&#39; &#124; &#39;category&#39; &#124; &#39;sub_category&#39; &#124; &#39;state&#39; &#124; &#39;city&#39;>** | Field name for which you want auto-completion | defaults to undefined|
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

# **getListing**
> HeavyEquipmentsListing getListing()

Get a particular Heavy equipment listing by its id

### Example

```typescript
import {
    HeavyEquipmentSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HeavyEquipmentSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getListing(
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

**HeavyEquipmentsListing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Heavy equipment listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListingExtra**
> ListingExtraAttributes getListingExtra()

Get Heavy equipment listing options, features, seller comments

### Example

```typescript
import {
    HeavyEquipmentSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HeavyEquipmentSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getListingExtra(
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
|**200** | Heavy equipment ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListingMedia**
> ListingMedia getListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    HeavyEquipmentSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HeavyEquipmentSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getListingMedia(
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

# **searchActive**
> HeavyEquipmentsSearchResponse searchActive()

This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search heavy equipments around a given geo-point within a given radius  2. Search heavy equipments for a specific year / make / model or combination of these  3. Search heavy equipments matching multiple year, make, model combinatins in the same search request 4. Filter results by most heavy equipment specification attributes 5. Filter heavy equipments within a given price / miles range 6. Specify a sort order for the results on price / miles / listed date  7. Search heavy equipments for a given City / State combination  8. Get Facets to build the search drill downs  9. Get Market averages for price/miles for your search

### Example

```typescript
import {
    HeavyEquipmentSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HeavyEquipmentSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let searchText: string; //To search a substring across entire document (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
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
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let category: string; //To filter heavy equipments on their category (optional) (default to undefined)
let subCategory: string; //To filter heavy equipments on their sub-category (optional) (default to undefined)
let hoursUsedRange: string; //Hours used range to filter heavy equipments with the their usage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
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

const { status, data } = await apiInstance.searchActive(
    apiKey,
    priceRange,
    milesRange,
    msrpRange,
    latitude,
    longitude,
    radius,
    searchText,
    year,
    make,
    model,
    trim,
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
    drivetrain,
    bodyType,
    category,
    subCategory,
    hoursUsedRange,
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
    firstSeenDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **searchText** | [**string**] | To search a substring across entire document | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
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
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **category** | [**string**] | To filter heavy equipments on their category | (optional) defaults to undefined|
| **subCategory** | [**string**] | To filter heavy equipments on their sub-category | (optional) defaults to undefined|
| **hoursUsedRange** | [**string**] | Hours used range to filter heavy equipments with the their usage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
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


### Return type

**HeavyEquipmentsSearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all heavy equipment listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

