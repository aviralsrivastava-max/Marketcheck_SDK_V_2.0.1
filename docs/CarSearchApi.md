# CarSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoCompleteCar**](#autocompletecar) | **GET** /search/car/auto-complete | API for auto-completion of inputs|
|[**getCarAuctionListing**](#getcarauctionlisting) | **GET** /listing/car/auction/{id} | Listing by id|
|[**getCarAuctionListingExtra**](#getcarauctionlistingextra) | **GET** /listing/car/auction/{id}/extra | Long text Listings attributes for Listing with the given id|
|[**getCarAuctionListingMedia**](#getcarauctionlistingmedia) | **GET** /listing/car/auction/{id}/media | Listing media by id|
|[**getCarFsboListing**](#getcarfsbolisting) | **GET** /listing/car/fsbo/{id} | Listing by id|
|[**getCarFsboListingExtra**](#getcarfsbolistingextra) | **GET** /listing/car/fsbo/{id}/extra | Long text Listings attributes for Listing with the given id|
|[**getCarFsboListingMedia**](#getcarfsbolistingmedia) | **GET** /listing/car/fsbo/{id}/media | Listing media by id|
|[**getCarListing**](#getcarlisting) | **GET** /listing/car/{id} | Listing by id|
|[**getCarListingExtra**](#getcarlistingextra) | **GET** /listing/car/{id}/extra | Long text Listings attributes for Listing with the given id|
|[**getCarListingMedia**](#getcarlistingmedia) | **GET** /listing/car/{id}/media | Listing media by id|
|[**getCarUkActive**](#getcarukactive) | **GET** /search/car/uk/active | Gets active car listings in UK for the given search criteria|
|[**getCarUkListing**](#getcaruklisting) | **GET** /listing/car/uk/{id} | Listing by id|
|[**getCarUkListingExtra**](#getcaruklistingextra) | **GET** /listing/car/uk/{id}/extra | Long text Listings attributes for Listing with the given id|
|[**getCarUkListingMedia**](#getcaruklistingmedia) | **GET** /listing/car/uk/{id}/media | Listing media by id|
|[**searchCarActive**](#searchcaractive) | **GET** /search/car/active | Gets active car listings for the given search criteria|
|[**searchCarAuctionActive**](#searchcarauctionactive) | **GET** /search/car/auction/active | Gets active auction car listings for the given search criteria|
|[**searchCarFsboActive**](#searchcarfsboactive) | **GET** /search/car/fsbo/active | Gets active private party car listings for the given search criteria|
|[**searchCarRecents**](#searchcarrecents) | **GET** /search/car/recents | Gets Recent car listings for the given search criteria|
|[**searchCarUkRecents**](#searchcarukrecents) | **GET** /search/car/uk/recents | Gets Recent UK car listings for the given search criteria|
|[**searchDealerCarInventory**](#searchdealercarinventory) | **GET** /car/dealer/inventory/active | Get dealers active inventory|
|[**searchDealershipInventory**](#searchdealershipinventory) | **GET** /dealerships/inventory | Get dealer active inventory|
|[**searchDealershipInventoryMarketplace**](#searchdealershipinventorymarketplace) | **GET** /dealerships/inventory/marketplaces/{marketplace_name} | Get dealer active inventory|

# **autoCompleteCar**
> SearchAutoCompleteResponse autoCompleteCar()

Auto-complete the inputs of your end users

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let field: 'ymm' | 'mm' | 'make' | 'model' | 'trim' | 'body_type' | 'body_subtype' | 'vehicle_type' | 'transmission' | 'drivetrain' | 'fuel_type' | 'exterior_color' | 'interior_color' | 'engine' | 'engine_size' | 'engine_block' | 'state' | 'city' | 'version' | 'powertrain_type'; //Field name for which you want auto-completion (default to undefined)
let input: string; //Input entered so far (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source only for widget requests (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let mcWebsiteId: Array<number>; //Website id to filter the listings. (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let country: Array<string>; //To filter listing on Country in which they are listed (optional) (default to undefined)
let carType: 'new' | 'used'; //Car type. Allowed values are - new / used (optional) (default to undefined)
let includeNonVinListings: 'true' | 'false'; //Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results (optional) (default to 'false')
let ignoreCase: boolean; //Boolean variable to indicate ignore case of current input (optional) (default to true)
let termCounts: boolean; //Boolean variable to indicate wheather to include term counts as well in response (optional) (default to false)
let sortBy: 'index' | 'count'; //Sort the response, either by index or count(default) (optional) (default to 'index')
let sellerType: string; //seller type for autocomplete (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let evBatteryType: Array<string>; //To filter EV listing on their battery type (optional) (default to undefined)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let facetMinCount: number; //Provide minimum count value for facets (optional) (default to 1)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)

const { status, data } = await apiInstance.autoCompleteCar(
    field,
    input,
    apiKey,
    year,
    make,
    model,
    trim,
    bodyType,
    bodySubtype,
    vehicleType,
    transmission,
    drivetrain,
    fuelType,
    exteriorColor,
    interiorColor,
    engine,
    engineSize,
    engineBlock,
    state,
    city,
    source,
    dealerId,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    country,
    carType,
    includeNonVinListings,
    ignoreCase,
    termCounts,
    sortBy,
    sellerType,
    radius,
    zip,
    evBatteryType,
    inventoryCountRange,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    inTransit,
    facetMinCount,
    excludeMake
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **field** | [**&#39;ymm&#39; | &#39;mm&#39; | &#39;make&#39; | &#39;model&#39; | &#39;trim&#39; | &#39;body_type&#39; | &#39;body_subtype&#39; | &#39;vehicle_type&#39; | &#39;transmission&#39; | &#39;drivetrain&#39; | &#39;fuel_type&#39; | &#39;exterior_color&#39; | &#39;interior_color&#39; | &#39;engine&#39; | &#39;engine_size&#39; | &#39;engine_block&#39; | &#39;state&#39; | &#39;city&#39; | &#39;version&#39; | &#39;powertrain_type&#39;**]**Array<&#39;ymm&#39; &#124; &#39;mm&#39; &#124; &#39;make&#39; &#124; &#39;model&#39; &#124; &#39;trim&#39; &#124; &#39;body_type&#39; &#124; &#39;body_subtype&#39; &#124; &#39;vehicle_type&#39; &#124; &#39;transmission&#39; &#124; &#39;drivetrain&#39; &#124; &#39;fuel_type&#39; &#124; &#39;exterior_color&#39; &#124; &#39;interior_color&#39; &#124; &#39;engine&#39; &#124; &#39;engine_size&#39; &#124; &#39;engine_block&#39; &#124; &#39;state&#39; &#124; &#39;city&#39; &#124; &#39;version&#39; &#124; &#39;powertrain_type&#39;>** | Field name for which you want auto-completion | defaults to undefined|
| **input** | [**string**] | Input entered so far | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source only for widget requests | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | Website id to filter the listings. | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **country** | **Array&lt;string&gt;** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39;>** | Car type. Allowed values are - new / used | (optional) defaults to undefined|
| **includeNonVinListings** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results | (optional) defaults to 'false'|
| **ignoreCase** | [**boolean**] | Boolean variable to indicate ignore case of current input | (optional) defaults to true|
| **termCounts** | [**boolean**] | Boolean variable to indicate wheather to include term counts as well in response | (optional) defaults to false|
| **sortBy** | [**&#39;index&#39; | &#39;count&#39;**]**Array<&#39;index&#39; &#124; &#39;count&#39;>** | Sort the response, either by index or count(default) | (optional) defaults to 'index'|
| **sellerType** | [**string**] | seller type for autocomplete | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **evBatteryType** | **Array&lt;string&gt;** | To filter EV listing on their battery type | (optional) defaults to undefined|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **facetMinCount** | [**number**] | Provide minimum count value for facets | (optional) defaults to 1|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|


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

# **getCarAuctionListing**
> Listing getCarAuctionListing()

Get a particular auction listing by its id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)

const { status, data } = await apiInstance.getCarAuctionListing(
    id,
    apiKey,
    appendApiKey,
    includeRelevantLinks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|


### Return type

**Listing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarAuctionListingExtra**
> ListingExtraAttributes getCarAuctionListingExtra()

Get listing options, features, seller comments

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarAuctionListingExtra(
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
|**200** | ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarAuctionListingMedia**
> ListingMedia getCarAuctionListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)

const { status, data } = await apiInstance.getCarAuctionListingMedia(
    id,
    apiKey,
    appendApiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|


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
|**200** | ListingMedia for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarFsboListing**
> Listing getCarFsboListing()

Get a particular private party listing by its id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)

const { status, data } = await apiInstance.getCarFsboListing(
    id,
    apiKey,
    appendApiKey,
    includeRelevantLinks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|


### Return type

**Listing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarFsboListingExtra**
> ListingExtraAttributes getCarFsboListingExtra()

Get listing options, features, seller comments

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarFsboListingExtra(
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
|**200** | ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarFsboListingMedia**
> ListingMedia getCarFsboListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)

const { status, data } = await apiInstance.getCarFsboListingMedia(
    id,
    apiKey,
    appendApiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|


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
|**200** | ListingMedia for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarListing**
> Listing getCarListing()

Get a particular car listing by its id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let preferredDealers: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to true)
let includePreferredDealerFlag: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to true)

const { status, data } = await apiInstance.getCarListing(
    id,
    apiKey,
    appendApiKey,
    includeRelevantLinks,
    preferredDealers,
    includePreferredDealerFlag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **preferredDealers** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to true|
| **includePreferredDealerFlag** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to true|


### Return type

**Listing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarListingExtra**
> ListingExtraAttributes getCarListingExtra()

Get listing options, features, seller comments

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarListingExtra(
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
|**200** | ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarListingMedia**
> ListingMedia getCarListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)

const { status, data } = await apiInstance.getCarListingMedia(
    id,
    apiKey,
    appendApiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|


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
|**200** | ListingMedia for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarUkActive**
> UKSearchResponse getCarUkActive()

Search cars for sale in UK

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to false)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let postalCode: string; //To filter listing on postal code around which they are listed (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let carType: 'new' | 'used'; //Car type. Allowed values are - new / used (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let variant: Array<string>; //To filter listing on their variant (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'uk' | 'england' | 'scotland' | 'northern ireland' | 'wales'; //To filter listing on Country in which they are listed (optional) (default to 'uk')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let county: string; //To filter listing on county in which they are listed (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let co2Emissions: string; //CO2 emissions (optional) (default to undefined)
let insuranceGroup: Array<string>; //Insurance Group (optional) (default to undefined)
let vehicleRegistrationMark: string; //Vehicle Registration Mark (optional) (default to undefined)
let vehicleRegistrationDateRange: string; //Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let numOwners: string; //Number of owners. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let writeOffCategory: Array<string>; //write off category (optional) (default to undefined)
let excludeWriteOffCategory: Array<string>; //To exclude write off category (optional) (default to undefined)
let fcaStatus: Array<string>; //To filter on fca status (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let vrm: Array<string>; //To filter on vrm (optional) (default to undefined)
let powertrainType: Array<string>; //To filter on powertrain_type (optional) (default to undefined)
let clientFilters: boolean; //Flag to add explicit filters set on client level in solr (optional) (default to true)
let boost: boolean; //Flag to sort listings based on client filter score in solr (optional) (default to false)
let carLocationSellerName: Array<string>; //Filter cars on seller name (optional) (default to undefined)
let carLocationStreet: Array<string>; //Filter cars on street name (optional) (default to undefined)
let carLocationCity: Array<string>; //Filter cars on city (optional) (default to undefined)
let carLocationCounty: Array<string>; //Filter cars on county (optional) (default to undefined)
let carLocationZip: string; //To filter listing on car ZIP around which they are listed (optional) (default to undefined)
let carLocationLatitude: number; //Latitude component of car location (optional) (default to undefined)
let carLocationLongitude: number; //Longitude component of car location (optional) (default to undefined)
let priceChange: 'positive' | 'negative'; //Query to filter listings based on their positive and negative price change (optional) (default to undefined)
let priceChangeRange: string; //Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 (optional) (default to undefined)
let activeInventoryDateRange: string; //date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let uvcId: Array<string>; //To filter on uvc id (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let combinedMpgRange: string; //Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let ulezCompliant: boolean; //Filter listings based on drive into ultra low emmition zone (optional) (default to undefined)
let evBatteryType: Array<string>; //To filter EV listing on their battery type (optional) (default to undefined)
let evBatteryCapacityRange: string; //EV Vehicle battery capacity range to filter listings with battery capacity in the given range. (optional) (default to undefined)
let evVehicleRange: string; //EV Vehicle Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let performanceCo2Range: string; //Performance co2 range for UK to filter listings with the co2 emission in the range given. Range to be given in the format - min-max e.g. 100-150 (optional) (default to undefined)
let preferredDealers: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to false)
let includePreferredDealerFlag: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to false)
let preferredDealersOnly: boolean; //Flag to show only preferred dealers listings based on client filter score in solr (optional) (default to false)
let modelVariant: Array<string>; //To filter listing on their model-variant parameter from UKVD (optional) (default to undefined)
let isVatIncluded: boolean; //Flag To include price included vat listings. (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let wheelbaseCategory: Array<string>; //To filter listing on their wheelbase category (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.getCarUkActive(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    postalCode,
    zip,
    carType,
    year,
    yearRange,
    make,
    model,
    variant,
    trim,
    bodyType,
    ymmt,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    engine,
    milesRange,
    priceRange,
    msrpRange,
    sortBy,
    sortOrder,
    rows,
    start,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    county,
    state,
    city,
    fuelType,
    stockNo,
    domRange,
    domActiveRange,
    dom180Range,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    co2Emissions,
    insuranceGroup,
    vehicleRegistrationMark,
    vehicleRegistrationDateRange,
    numOwners,
    inventoryCountRange,
    source,
    dealerId,
    excludeSources,
    excludeDealerIds,
    excludeMcWebsiteIds,
    inTransit,
    includeNonVinListings,
    cylinders,
    photoLinks,
    photoLinksCached,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    dealerType,
    writeOffCategory,
    excludeWriteOffCategory,
    fcaStatus,
    seatingCapacity,
    vrm,
    powertrainType,
    clientFilters,
    boost,
    carLocationSellerName,
    carLocationStreet,
    carLocationCity,
    carLocationCounty,
    carLocationZip,
    carLocationLatitude,
    carLocationLongitude,
    priceChange,
    priceChangeRange,
    activeInventoryDateRange,
    engineSize,
    engineSizeRange,
    uvcId,
    highwayMpgRange,
    cityMpgRange,
    combinedMpgRange,
    owned,
    minPhotoLinks,
    minPhotoLinksCached,
    match,
    ulezCompliant,
    evBatteryType,
    evBatteryCapacityRange,
    evVehicleRange,
    excludeMake,
    performanceCo2Range,
    preferredDealers,
    includePreferredDealerFlag,
    preferredDealersOnly,
    modelVariant,
    isVatIncluded,
    dosActiveRange,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    vehicleType,
    wheelbaseCategory,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to false|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **postalCode** | [**string**] | To filter listing on postal code around which they are listed | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39;>** | Car type. Allowed values are - new / used | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **variant** | **Array&lt;string&gt;** | To filter listing on their variant | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;uk&#39; | &#39;england&#39; | &#39;scotland&#39; | &#39;northern ireland&#39; | &#39;wales&#39;**]**Array<&#39;uk&#39; &#124; &#39;england&#39; &#124; &#39;scotland&#39; &#124; &#39;northern ireland&#39; &#124; &#39;wales&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'uk'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **county** | [**string**] | To filter listing on county in which they are listed | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **co2Emissions** | [**string**] | CO2 emissions | (optional) defaults to undefined|
| **insuranceGroup** | **Array&lt;string&gt;** | Insurance Group | (optional) defaults to undefined|
| **vehicleRegistrationMark** | [**string**] | Vehicle Registration Mark | (optional) defaults to undefined|
| **vehicleRegistrationDateRange** | [**string**] | Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **numOwners** | [**string**] | Number of owners. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **writeOffCategory** | **Array&lt;string&gt;** | write off category | (optional) defaults to undefined|
| **excludeWriteOffCategory** | **Array&lt;string&gt;** | To exclude write off category | (optional) defaults to undefined|
| **fcaStatus** | **Array&lt;string&gt;** | To filter on fca status | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **vrm** | **Array&lt;string&gt;** | To filter on vrm | (optional) defaults to undefined|
| **powertrainType** | **Array&lt;string&gt;** | To filter on powertrain_type | (optional) defaults to undefined|
| **clientFilters** | [**boolean**] | Flag to add explicit filters set on client level in solr | (optional) defaults to true|
| **boost** | [**boolean**] | Flag to sort listings based on client filter score in solr | (optional) defaults to false|
| **carLocationSellerName** | **Array&lt;string&gt;** | Filter cars on seller name | (optional) defaults to undefined|
| **carLocationStreet** | **Array&lt;string&gt;** | Filter cars on street name | (optional) defaults to undefined|
| **carLocationCity** | **Array&lt;string&gt;** | Filter cars on city | (optional) defaults to undefined|
| **carLocationCounty** | **Array&lt;string&gt;** | Filter cars on county | (optional) defaults to undefined|
| **carLocationZip** | [**string**] | To filter listing on car ZIP around which they are listed | (optional) defaults to undefined|
| **carLocationLatitude** | [**number**] | Latitude component of car location | (optional) defaults to undefined|
| **carLocationLongitude** | [**number**] | Longitude component of car location | (optional) defaults to undefined|
| **priceChange** | [**&#39;positive&#39; | &#39;negative&#39;**]**Array<&#39;positive&#39; &#124; &#39;negative&#39;>** | Query to filter listings based on their positive and negative price change | (optional) defaults to undefined|
| **priceChangeRange** | [**string**] | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 | (optional) defaults to undefined|
| **activeInventoryDateRange** | [**string**] | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **uvcId** | **Array&lt;string&gt;** | To filter on uvc id | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **combinedMpgRange** | [**string**] | Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **ulezCompliant** | [**boolean**] | Filter listings based on drive into ultra low emmition zone | (optional) defaults to undefined|
| **evBatteryType** | **Array&lt;string&gt;** | To filter EV listing on their battery type | (optional) defaults to undefined|
| **evBatteryCapacityRange** | [**string**] | EV Vehicle battery capacity range to filter listings with battery capacity in the given range. | (optional) defaults to undefined|
| **evVehicleRange** | [**string**] | EV Vehicle Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **performanceCo2Range** | [**string**] | Performance co2 range for UK to filter listings with the co2 emission in the range given. Range to be given in the format - min-max e.g. 100-150 | (optional) defaults to undefined|
| **preferredDealers** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to false|
| **includePreferredDealerFlag** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to false|
| **preferredDealersOnly** | [**boolean**] | Flag to show only preferred dealers listings based on client filter score in solr | (optional) defaults to false|
| **modelVariant** | **Array&lt;string&gt;** | To filter listing on their model-variant parameter from UKVD | (optional) defaults to undefined|
| **isVatIncluded** | [**boolean**] | Flag To include price included vat listings. | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **wheelbaseCategory** | **Array&lt;string&gt;** | To filter listing on their wheelbase category | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


### Return type

**UKSearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarUkListing**
> Listing getCarUkListing()

Get a particular car listing by its id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let preferredDealers: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to true)
let includePreferredDealerFlag: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to true)
let redirectToActive: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \'Listing is no longer active\' (optional) (default to undefined)
let redirectToLatest: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 (optional) (default to undefined)

const { status, data } = await apiInstance.getCarUkListing(
    id,
    apiKey,
    appendApiKey,
    preferredDealers,
    includePreferredDealerFlag,
    redirectToActive,
    redirectToLatest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **preferredDealers** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to true|
| **includePreferredDealerFlag** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to true|
| **redirectToActive** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \&#39;Listing is no longer active\&#39; | (optional) defaults to undefined|
| **redirectToLatest** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 | (optional) defaults to undefined|


### Return type

**Listing**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Listing for the given id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarUkListingExtra**
> ListingExtraAttributes getCarUkListingExtra()

Get listing options, features, seller comments

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let redirectToActive: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \'Listing is no longer active\' (optional) (default to undefined)
let redirectToLatest: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 (optional) (default to undefined)

const { status, data } = await apiInstance.getCarUkListingExtra(
    id,
    apiKey,
    redirectToActive,
    redirectToLatest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **redirectToActive** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \&#39;Listing is no longer active\&#39; | (optional) defaults to undefined|
| **redirectToLatest** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 | (optional) defaults to undefined|


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
|**200** | ListingAttributes for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarUkListingMedia**
> ListingMedia getCarUkListingMedia()

Get listing media (photo, photos) by id

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let id: string; //Listing id to get all the listing attributes (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let redirectToActive: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \'Listing is no longer active\' (optional) (default to undefined)
let redirectToLatest: boolean; //Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 (optional) (default to undefined)

const { status, data } = await apiInstance.getCarUkListingMedia(
    id,
    apiKey,
    appendApiKey,
    redirectToActive,
    redirectToLatest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Listing id to get all the listing attributes | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **redirectToActive** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to active listing with HTTP 301, if listing is not found then send HTTP 422 with message \&#39;Listing is no longer active\&#39; | (optional) defaults to undefined|
| **redirectToLatest** | [**boolean**] | Flag to check if listing is active if active then send it with HTTP 200 else redirect to latest listing with HTTP 301 | (optional) defaults to undefined|


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
|**200** | ListingMedia for the given listing id |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarActive**
> SearchResponse searchCarActive()

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let vins: string; //Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional) (default to undefined)
let taxonomyVins: string; //Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional) (default to undefined)
let mm: string; //Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymm: string; //Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source only for widget requests (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let mcWebsiteId: Array<number>; //Website id to filter the listings. (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let powertrainType: Array<string>; //To filter on powertrain_type (optional) (default to undefined)
let priceChange: 'positive' | 'negative'; //Query to filter listings based on their positive and negative price change (optional) (default to undefined)
let priceChangeRange: string; //Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 (optional) (default to undefined)
let activeInventoryDateRange: string; //date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let highValueFeatures: Array<string>; //To filter listings on their high_value_features. Results will be intersection of provided HVFs (optional) (default to undefined)
let excludeHighValueFeatures: Array<string>; //To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. (optional) (default to undefined)
let optionsPackages: Array<string>; //To filter listings on their options_packages_mv. Results will be intersection of provided OPs (optional) (default to undefined)
let excludeOptionsPackages: Array<string>; //To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let clientFilters: boolean; //Flag to add explicit filters set on client level in solr (optional) (default to true)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let preferredDealers: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to false)
let includePreferredDealerFlag: boolean; //Flag to add preferred dealers flag to listings based on client filter score in solr (optional) (default to false)
let boost: boolean; //Flag to sort listings based on client filter score in solr (optional) (default to false)
let preferredDealersOnly: boolean; //Flag to show only preferred dealers listings based on client filter score in solr (optional) (default to false)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarActive(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    vin,
    bodyType,
    bodySubtype,
    vehicleType,
    vins,
    taxonomyVins,
    mm,
    ymm,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    source,
    state,
    city,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inventoryCountRange,
    dealerId,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    inTransit,
    seatingCapacity,
    powertrainType,
    priceChange,
    priceChangeRange,
    activeInventoryDateRange,
    engineSizeRange,
    highValueFeatures,
    excludeHighValueFeatures,
    optionsPackages,
    excludeOptionsPackages,
    minPhotoLinks,
    minPhotoLinksCached,
    clientFilters,
    excludeMake,
    preferredDealers,
    includePreferredDealerFlag,
    boost,
    preferredDealersOnly,
    dosActiveRange,
    version,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **vins** | [**string**] | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | (optional) defaults to undefined|
| **taxonomyVins** | [**string**] | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | (optional) defaults to undefined|
| **mm** | [**string**] | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymm** | [**string**] | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source only for widget requests | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | Website id to filter the listings. | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **powertrainType** | **Array&lt;string&gt;** | To filter on powertrain_type | (optional) defaults to undefined|
| **priceChange** | [**&#39;positive&#39; | &#39;negative&#39;**]**Array<&#39;positive&#39; &#124; &#39;negative&#39;>** | Query to filter listings based on their positive and negative price change | (optional) defaults to undefined|
| **priceChangeRange** | [**string**] | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 | (optional) defaults to undefined|
| **activeInventoryDateRange** | [**string**] | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **highValueFeatures** | **Array&lt;string&gt;** | To filter listings on their high_value_features. Results will be intersection of provided HVFs | (optional) defaults to undefined|
| **excludeHighValueFeatures** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. | (optional) defaults to undefined|
| **optionsPackages** | **Array&lt;string&gt;** | To filter listings on their options_packages_mv. Results will be intersection of provided OPs | (optional) defaults to undefined|
| **excludeOptionsPackages** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **clientFilters** | [**boolean**] | Flag to add explicit filters set on client level in solr | (optional) defaults to true|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **preferredDealers** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to false|
| **includePreferredDealerFlag** | [**boolean**] | Flag to add preferred dealers flag to listings based on client filter score in solr | (optional) defaults to false|
| **boost** | [**boolean**] | Flag to sort listings based on client filter score in solr | (optional) defaults to false|
| **preferredDealersOnly** | [**boolean**] | Flag to show only preferred dealers listings based on client filter score in solr | (optional) defaults to false|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


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
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarAuctionActive**
> SearchResponse searchCarAuctionActive()

This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let vins: string; //Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional) (default to undefined)
let taxonomyVins: string; //Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional) (default to undefined)
let mm: string; //Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymm: string; //Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source only for widget requests (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let mcWebsiteId: Array<number>; //Website id to filter the listings. (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let titleType: 'clean' | 'salvage'; //To filter on title type (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let highValueFeatures: Array<string>; //To filter listings on their high_value_features. Results will be intersection of provided HVFs (optional) (default to undefined)
let excludeHighValueFeatures: Array<string>; //To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. (optional) (default to undefined)
let optionsPackages: Array<string>; //To filter listings on their options_packages_mv. Results will be intersection of provided OPs (optional) (default to undefined)
let excludeOptionsPackages: Array<string>; //To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarAuctionActive(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    vin,
    bodyType,
    bodySubtype,
    vehicleType,
    vins,
    taxonomyVins,
    mm,
    ymm,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    state,
    city,
    source,
    dealerId,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inventoryCountRange,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    inTransit,
    titleType,
    seatingCapacity,
    engineSizeRange,
    minPhotoLinks,
    minPhotoLinksCached,
    excludeMake,
    dosActiveRange,
    highValueFeatures,
    excludeHighValueFeatures,
    optionsPackages,
    excludeOptionsPackages,
    version,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **vins** | [**string**] | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | (optional) defaults to undefined|
| **taxonomyVins** | [**string**] | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | (optional) defaults to undefined|
| **mm** | [**string**] | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymm** | [**string**] | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source only for widget requests | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | Website id to filter the listings. | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **titleType** | [**&#39;clean&#39; | &#39;salvage&#39;**]**Array<&#39;clean&#39; &#124; &#39;salvage&#39;>** | To filter on title type | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **highValueFeatures** | **Array&lt;string&gt;** | To filter listings on their high_value_features. Results will be intersection of provided HVFs | (optional) defaults to undefined|
| **excludeHighValueFeatures** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. | (optional) defaults to undefined|
| **optionsPackages** | **Array&lt;string&gt;** | To filter listings on their options_packages_mv. Results will be intersection of provided OPs | (optional) defaults to undefined|
| **excludeOptionsPackages** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


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
|**200** | List of all auction cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarFsboActive**
> SearchResponse searchCarFsboActive()

This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let vins: string; //Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional) (default to undefined)
let taxonomyVins: string; //Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional) (default to undefined)
let mm: string; //Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymm: string; //Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source only for widget requests (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let mcWebsiteId: Array<number>; //Website id to filter the listings. (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let excludeDealerListings: boolean; //A list of fsbo listings to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let highValueFeatures: Array<string>; //To filter listings on their high_value_features. Results will be intersection of provided HVFs (optional) (default to undefined)
let excludeHighValueFeatures: Array<string>; //To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. (optional) (default to undefined)
let optionsPackages: Array<string>; //To filter listings on their options_packages_mv. Results will be intersection of provided OPs (optional) (default to undefined)
let excludeOptionsPackages: Array<string>; //To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarFsboActive(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    vin,
    bodyType,
    bodySubtype,
    vehicleType,
    vins,
    taxonomyVins,
    mm,
    ymm,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    state,
    city,
    source,
    dealerId,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inventoryCountRange,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    excludeDealerListings,
    inTransit,
    seatingCapacity,
    engineSizeRange,
    minPhotoLinks,
    minPhotoLinksCached,
    excludeMake,
    dosActiveRange,
    highValueFeatures,
    excludeHighValueFeatures,
    optionsPackages,
    excludeOptionsPackages,
    version,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **vins** | [**string**] | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | (optional) defaults to undefined|
| **taxonomyVins** | [**string**] | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | (optional) defaults to undefined|
| **mm** | [**string**] | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymm** | [**string**] | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source only for widget requests | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | Website id to filter the listings. | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **excludeDealerListings** | [**boolean**] | A list of fsbo listings to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **highValueFeatures** | **Array&lt;string&gt;** | To filter listings on their high_value_features. Results will be intersection of provided HVFs | (optional) defaults to undefined|
| **excludeHighValueFeatures** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. | (optional) defaults to undefined|
| **optionsPackages** | **Array&lt;string&gt;** | To filter listings on their options_packages_mv. Results will be intersection of provided OPs | (optional) defaults to undefined|
| **excludeOptionsPackages** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


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
|**200** | List of all FSBO cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarRecents**
> SearchResponse searchCarRecents()

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let vins: string; //Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional) (default to undefined)
let taxonomyVins: string; //Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let sold: boolean; //sold parameter to fetch only sold listings (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let expired: 'true' | 'false'; //Boolean falg to either fetch only the expired listings or active ones (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let activeInventoryDateRange: string; //date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let priceChangeRange: string; //Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 (optional) (default to undefined)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarRecents(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    dealerId,
    vin,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    vins,
    taxonomyVins,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    state,
    city,
    msaCode,
    dealerName,
    dealershipGroupName,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    sold,
    includeRelevantLinks,
    expired,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    inTransit,
    seatingCapacity,
    activeInventoryDateRange,
    engineSizeRange,
    priceChangeRange,
    excludeMake,
    dosActiveRange,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **vins** | [**string**] | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | (optional) defaults to undefined|
| **taxonomyVins** | [**string**] | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **sold** | [**boolean**] | sold parameter to fetch only sold listings | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **expired** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Boolean falg to either fetch only the expired listings or active ones | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **activeInventoryDateRange** | [**string**] | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **priceChangeRange** | [**string**] | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 | (optional) defaults to undefined|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


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
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCarUkRecents**
> UKSearchResponse searchCarUkRecents()

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let wheelbaseCategory: Array<string>; //To filter listing on their wheelbase category (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let combinedMpgRange: string; //Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'uk' | 'england' | 'scotland' | 'northern ireland' | 'wales'; //To filter listing on Country in which they are listed (optional) (default to 'uk')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let county: string; //To filter listing on county in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let sold: boolean; //sold parameter to fetch only sold listings (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let expired: 'true' | 'false'; //Boolean falg to either fetch only the expired listings or active ones (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let insuranceGroup: Array<string>; //Insurance Group (optional) (default to undefined)
let vrm: Array<string>; //To filter on vrm (optional) (default to undefined)
let numOwners: string; //Number of owners. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let variant: Array<string>; //To filter listing on their variant (optional) (default to undefined)
let postalCode: string; //To filter listing on postal code around which they are listed (optional) (default to undefined)
let writeOffCategory: Array<string>; //write off category (optional) (default to undefined)
let excludeWriteOffCategory: Array<string>; //To exclude write off category (optional) (default to undefined)
let fcaStatus: Array<string>; //To filter on fca status (optional) (default to undefined)
let activeInventoryDateRange: string; //date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let priceChangeRange: string; //Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 (optional) (default to undefined)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)
let modelVariant: Array<string>; //To filter listing on their model-variant parameter from UKVD (optional) (default to undefined)
let ulezCompliant: boolean; //Filter listings based on drive into ultra low emmition zone (optional) (default to undefined)
let isVatIncluded: boolean; //Flag To include price included vat listings. (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let vdpUrl: string; //Filter based on vehicle detail page URL (optional) (default to undefined)

const { status, data } = await apiInstance.searchCarUkRecents(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    dealerId,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    wheelbaseCategory,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    combinedMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    state,
    county,
    city,
    msaCode,
    dealerName,
    dealershipGroupName,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    sold,
    includeRelevantLinks,
    expired,
    excludeDealerIds,
    excludeMcWebsiteIds,
    excludeSources,
    inTransit,
    seatingCapacity,
    insuranceGroup,
    vrm,
    numOwners,
    variant,
    postalCode,
    writeOffCategory,
    excludeWriteOffCategory,
    fcaStatus,
    activeInventoryDateRange,
    engineSizeRange,
    priceChangeRange,
    excludeMake,
    modelVariant,
    ulezCompliant,
    isVatIncluded,
    dosActiveRange,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    vdpUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **wheelbaseCategory** | **Array&lt;string&gt;** | To filter listing on their wheelbase category | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **combinedMpgRange** | [**string**] | Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;uk&#39; | &#39;england&#39; | &#39;scotland&#39; | &#39;northern ireland&#39; | &#39;wales&#39;**]**Array<&#39;uk&#39; &#124; &#39;england&#39; &#124; &#39;scotland&#39; &#124; &#39;northern ireland&#39; &#124; &#39;wales&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'uk'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **county** | [**string**] | To filter listing on county in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **sold** | [**boolean**] | sold parameter to fetch only sold listings | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **expired** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Boolean falg to either fetch only the expired listings or active ones | (optional) defaults to undefined|
| **excludeDealerIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeMcWebsiteIds** | **Array&lt;string&gt;** | A list of dealer ids to exclude from result | (optional) defaults to undefined|
| **excludeSources** | **Array&lt;string&gt;** | A list of sources to exclude from result | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **insuranceGroup** | **Array&lt;string&gt;** | Insurance Group | (optional) defaults to undefined|
| **vrm** | **Array&lt;string&gt;** | To filter on vrm | (optional) defaults to undefined|
| **numOwners** | [**string**] | Number of owners. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **variant** | **Array&lt;string&gt;** | To filter listing on their variant | (optional) defaults to undefined|
| **postalCode** | [**string**] | To filter listing on postal code around which they are listed | (optional) defaults to undefined|
| **writeOffCategory** | **Array&lt;string&gt;** | write off category | (optional) defaults to undefined|
| **excludeWriteOffCategory** | **Array&lt;string&gt;** | To exclude write off category | (optional) defaults to undefined|
| **fcaStatus** | **Array&lt;string&gt;** | To filter on fca status | (optional) defaults to undefined|
| **activeInventoryDateRange** | [**string**] | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **priceChangeRange** | [**string**] | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min|max e.g. 10|500 | (optional) defaults to undefined|
| **excludeMake** | **Array&lt;string&gt;** | A list of makes to exclude from result | (optional) defaults to undefined|
| **modelVariant** | **Array&lt;string&gt;** | To filter listing on their model-variant parameter from UKVD | (optional) defaults to undefined|
| **ulezCompliant** | [**boolean**] | Filter listings based on drive into ultra low emmition zone | (optional) defaults to undefined|
| **isVatIncluded** | [**boolean**] | Flag To include price included vat listings. | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **vdpUrl** | [**string**] | Filter based on vehicle detail page URL | (optional) defaults to undefined|


### Return type

**UKSearchResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchDealerCarInventory**
> SearchResponse searchDealerCarInventory()

Get dealers active inventory

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let includeLease: boolean; //Boolean param to search for listings that include leasing options in them (optional) (default to undefined)
let includeFinance: boolean; //Boolean param to search for listings that include finance options in them (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let vins: string; //Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional) (default to undefined)
let taxonomyVins: string; //Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional) (default to undefined)
let mm: string; //Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymm: string; //Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let match: string; //A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. `year,make,model,trim` or `year,make,model,trim,version,build_code,options_packages` (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let plot: boolean; //If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional) (default to undefined)
let nodedup: boolean; //If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional) (default to undefined)
let dedup: boolean; //If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source (optional) (default to undefined)
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let trimO: Array<string>; //Filter listings on web scraped trim (optional) (default to undefined)
let trimR: Array<string>; //Filter trim on custom possible matches (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let powertrainType: Array<string>; //To filter on powertrain_type (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let highValueFeatures: Array<string>; //To filter listings on their high_value_features. Results will be intersection of provided HVFs (optional) (default to undefined)
let excludeHighValueFeatures: Array<string>; //To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. (optional) (default to undefined)
let optionsPackages: Array<string>; //To filter listings on their options_packages_mv. Results will be intersection of provided OPs (optional) (default to undefined)
let excludeOptionsPackages: Array<string>; //To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)

const { status, data } = await apiInstance.searchDealerCarInventory(
    apiKey,
    appendApiKey,
    latitude,
    longitude,
    radius,
    zip,
    includeLease,
    includeFinance,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carType,
    carfax1Owner,
    carfaxCleanTitle,
    yearRange,
    year,
    make,
    model,
    trim,
    dealerId,
    vin,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    vins,
    taxonomyVins,
    mm,
    ymm,
    ymmt,
    match,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    plot,
    nodedup,
    dedup,
    owned,
    state,
    city,
    dealerName,
    dealershipGroupName,
    trimO,
    trimR,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inventoryCountRange,
    inTransit,
    seatingCapacity,
    engineSizeRange,
    powertrainType,
    minPhotoLinks,
    minPhotoLinksCached,
    dosActiveRange,
    highValueFeatures,
    excludeHighValueFeatures,
    optionsPackages,
    excludeOptionsPackages,
    version,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **includeLease** | [**boolean**] | Boolean param to search for listings that include leasing options in them | (optional) defaults to undefined|
| **includeFinance** | [**boolean**] | Boolean param to search for listings that include finance options in them | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **vins** | [**string**] | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | (optional) defaults to undefined|
| **taxonomyVins** | [**string**] | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | (optional) defaults to undefined|
| **mm** | [**string**] | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymm** | [**string**] | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **match** | [**string**] | A comma-separated list of fields to perform an exact match on, valid values (year, make, model, trim, version, build_code, options_packages). E.g. &#x60;year,make,model,trim&#x60; or &#x60;year,make,model,trim,version,build_code,options_packages&#x60; | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **plot** | [**boolean**] | If plot has value true results in around 25k coordinates with limited fields to plot respective graph | (optional) defaults to undefined|
| **nodedup** | [**boolean**] | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | (optional) defaults to undefined|
| **dedup** | [**boolean**] | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or mc_website_id or source | (optional) defaults to undefined|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **trimO** | **Array&lt;string&gt;** | Filter listings on web scraped trim | (optional) defaults to undefined|
| **trimR** | **Array&lt;string&gt;** | Filter trim on custom possible matches | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inventoryCountRange** | [**string**] | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **powertrainType** | **Array&lt;string&gt;** | To filter on powertrain_type | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **highValueFeatures** | **Array&lt;string&gt;** | To filter listings on their high_value_features. Results will be intersection of provided HVFs | (optional) defaults to undefined|
| **excludeHighValueFeatures** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded HVFs. Results will consist only of listings that do not include the excluded HVFs. | (optional) defaults to undefined|
| **optionsPackages** | **Array&lt;string&gt;** | To filter listings on their options_packages_mv. Results will be intersection of provided OPs | (optional) defaults to undefined|
| **excludeOptionsPackages** | **Array&lt;string&gt;** | To filters listings to remove any that contain the specified excluded OPs. Results will consist only of listings that do not include the excluded OPs. | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|


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
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchDealershipInventory**
> SearchResponse searchDealershipInventory()

Retrieve the syndicated active inventory for a specific dealer.

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 1500. Max is 1500 (optional) (default to 1500)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let powertrainType: Array<string>; //To filter on powertrain_type (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let syndication: boolean; //syndication parameter to set default rows to 1500 (optional) (default to true)

const { status, data } = await apiInstance.searchDealershipInventory(
    apiKey,
    appendApiKey,
    zip,
    carType,
    yearRange,
    year,
    make,
    model,
    trim,
    dealerId,
    vin,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    owned,
    state,
    city,
    dealerName,
    dealershipGroupName,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inTransit,
    seatingCapacity,
    engineSizeRange,
    powertrainType,
    minPhotoLinks,
    minPhotoLinksCached,
    dosActiveRange,
    version,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    syndication
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 1500. Max is 1500 | (optional) defaults to 1500|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **powertrainType** | **Array&lt;string&gt;** | To filter on powertrain_type | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **syndication** | [**boolean**] | syndication parameter to set default rows to 1500 | (optional) defaults to true|


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
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchDealershipInventoryMarketplace**
> SearchResponse searchDealershipInventoryMarketplace()

Retrieve the syndicated active inventory for a specific dealer.

### Example

```typescript
import {
    CarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarSearchApi(configuration);

let marketplaceName: 'facebook' | 'google-va-feed'; //The marketplace name to identify the car. (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let appendApiKey: boolean; //Flag on whether to include api_key in response API urls (if any) (optional) (default to true)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let yearRange: string; //Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let vin: Array<string>; //To filter listing on their VIN (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 1500. Max is 1500 (optional) (default to 1500)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let includeNonVinListings: boolean; //To include non vin listings. Default is false (optional) (default to false)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let facetSort: 'count' | 'index'; //Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to 'count')
let stats: string; //The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')
let owned: boolean; //Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeCertified: boolean; //Boolean param to exclude certified cars from search results (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let photoLinks: boolean; //A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\'t have them (optional) (default to undefined)
let photoLinksCached: boolean; //A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\'t have them (optional) (default to undefined)
let stockNo: Array<string>; //To filter listing on their stock number on lot (optional) (default to undefined)
let lastSeenRange: string; //Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenRange: string; //First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtSourceRange: string; //First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let firstSeenAtMcRange: string; //First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let lastSeenDays: string; //Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenDays: string; //First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtSourceDays: string; //First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let firstSeenAtMcDays: string; //First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let includeRelevantLinks: boolean; //To include_relevant_links. Default is true (optional) (default to false)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let seatingCapacity: Array<string>; //To filter on vehicle seating capacity (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let powertrainType: Array<string>; //To filter on powertrain_type (optional) (default to undefined)
let minPhotoLinks: string; //Filter listings based by number of photo links within given range (optional) (default to undefined)
let minPhotoLinksCached: string; //Filter listings based by number of cached photo links within given range (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let version: Array<string>; //To filter listings on their version (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)
let syndication: boolean; //syndication parameter to set default rows to 1500 (optional) (default to true)

const { status, data } = await apiInstance.searchDealershipInventoryMarketplace(
    marketplaceName,
    apiKey,
    appendApiKey,
    zip,
    carType,
    yearRange,
    year,
    make,
    model,
    trim,
    dealerId,
    vin,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    sortBy,
    sortOrder,
    rows,
    start,
    includeNonVinListings,
    msaCode,
    facets,
    rangeFacets,
    facetSort,
    stats,
    country,
    owned,
    state,
    city,
    dealerName,
    dealershipGroupName,
    domActiveRange,
    dom180Range,
    excludeCertified,
    fuelType,
    dealerType,
    photoLinks,
    photoLinksCached,
    stockNo,
    lastSeenRange,
    firstSeenRange,
    firstSeenAtSourceRange,
    firstSeenAtMcRange,
    lastSeenDays,
    firstSeenDays,
    firstSeenAtSourceDays,
    firstSeenAtMcDays,
    includeRelevantLinks,
    inTransit,
    seatingCapacity,
    engineSizeRange,
    powertrainType,
    minPhotoLinks,
    minPhotoLinksCached,
    dosActiveRange,
    version,
    mcWebsiteId,
    mcDealerId,
    mcLocationId,
    mcRooftopId,
    mcDealershipGroupId,
    mcDealershipGroupName,
    mcSubDealershipGroupId,
    mcSubDealershipGroupName,
    mcCategory,
    syndication
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **marketplaceName** | [**&#39;facebook&#39; | &#39;google-va-feed&#39;**]**Array<&#39;facebook&#39; &#124; &#39;google-va-feed&#39;>** | The marketplace name to identify the car. | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **appendApiKey** | [**boolean**] | Flag on whether to include api_key in response API urls (if any) | (optional) defaults to true|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **yearRange** | [**string**] | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **vin** | **Array&lt;string&gt;** | To filter listing on their VIN | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 1500. Max is 1500 | (optional) defaults to 1500|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **includeNonVinListings** | [**boolean**] | To include non vin listings. Default is false | (optional) defaults to false|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **facetSort** | [**&#39;count&#39; | &#39;index&#39;**]**Array<&#39;count&#39; &#124; &#39;index&#39;>** | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | (optional) defaults to 'count'|
| **stats** | [**string**] | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|
| **owned** | [**boolean**] | Used in combination with dealer_id or mc_website_id or source, when true returns the listings actually owned by dealer himself | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **excludeCertified** | [**boolean**] | Boolean param to exclude certified cars from search results | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **photoLinks** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **photoLinksCached** | [**boolean**] | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don\&#39;t have them | (optional) defaults to undefined|
| **stockNo** | **Array&lt;string&gt;** | To filter listing on their stock number on lot | (optional) defaults to undefined|
| **lastSeenRange** | [**string**] | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenRange** | [**string**] | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtSourceRange** | [**string**] | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **firstSeenAtMcRange** | [**string**] | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **lastSeenDays** | [**string**] | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenDays** | [**string**] | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtSourceDays** | [**string**] | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **firstSeenAtMcDays** | [**string**] | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **includeRelevantLinks** | [**boolean**] | To include_relevant_links. Default is true | (optional) defaults to false|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **seatingCapacity** | **Array&lt;string&gt;** | To filter on vehicle seating capacity | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **powertrainType** | **Array&lt;string&gt;** | To filter on powertrain_type | (optional) defaults to undefined|
| **minPhotoLinks** | [**string**] | Filter listings based by number of photo links within given range | (optional) defaults to undefined|
| **minPhotoLinksCached** | [**string**] | Filter listings based by number of cached photo links within given range | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **version** | **Array&lt;string&gt;** | To filter listings on their version | (optional) defaults to undefined|
| **mcWebsiteId** | **Array&lt;number&gt;** | To filter listings on their mc_website_id | (optional) defaults to undefined|
| **mcDealerId** | **Array&lt;number&gt;** | To filter listings on their mc_dealer_id | (optional) defaults to undefined|
| **mcLocationId** | **Array&lt;number&gt;** | To filter listings on their mc_location_id | (optional) defaults to undefined|
| **mcRooftopId** | **Array&lt;number&gt;** | To filter listings on their mc_rooftop_id | (optional) defaults to undefined|
| **mcDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_dealership_group_id | (optional) defaults to undefined|
| **mcDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_dealership_group_name | (optional) defaults to undefined|
| **mcSubDealershipGroupId** | **Array&lt;number&gt;** | To filter listings on their mc_sub_dealership_group_id | (optional) defaults to undefined|
| **mcSubDealershipGroupName** | **Array&lt;string&gt;** | To filter listings on their mc_sub_dealership_group_name | (optional) defaults to undefined|
| **mcCategory** | [**&#39;Dealer&#39; | &#39;Dealership Group&#39; | &#39;Dealership Sub Group&#39; | &#39;Retailer&#39; | &#39;Aggregator&#39; | &#39;FSBO&#39; | &#39;Auction&#39;**]**Array<&#39;Dealer&#39; &#124; &#39;Dealership Group&#39; &#124; &#39;Dealership Sub Group&#39; &#124; &#39;Retailer&#39; &#124; &#39;Aggregator&#39; &#124; &#39;FSBO&#39; &#124; &#39;Auction&#39;>** | Filter based on mc_category | (optional) defaults to undefined|
| **syndication** | [**boolean**] | syndication parameter to set default rows to 1500 | (optional) defaults to true|


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
|**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

