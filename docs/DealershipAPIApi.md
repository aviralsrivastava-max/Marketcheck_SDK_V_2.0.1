# DealershipAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchDealershipCar**](#searchdealershipcar) | **GET** /dealerships/car | Find car dealership around|
|[**searchDealershipCarUk**](#searchdealershipcaruk) | **GET** /dealerships/car/uk | Find car dealerships around|

# **searchDealershipCar**
> DealershipResponse searchDealershipCar()

The dealership API returns a list of dealership around a given point and radius.

### Example

```typescript
import {
    DealershipAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DealershipAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let country: 'US' | 'CA' | 'us' | 'ca'; //To filter listing on Country in which they are listed (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let inventoryUrl: Array<string>; //inventory_url of dealer to be searched (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let createdAtRange: string; //Filter Dealers based on the date range in which they were created. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let createdAtDays: string; //Dealer Creation days range to filter listings with the dealer created in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let provider: boolean; //boolean param to include site providers name in response (optional) (default to false)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)

const { status, data } = await apiInstance.searchDealershipCar(
    apiKey,
    latitude,
    longitude,
    radius,
    rows,
    start,
    country,
    dealerType,
    city,
    state,
    inventoryUrl,
    zip,
    sortBy,
    sortOrder,
    facets,
    rangeFacets,
    createdAtRange,
    createdAtDays,
    provider,
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
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **inventoryUrl** | **Array&lt;string&gt;** | inventory_url of dealer to be searched | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **createdAtRange** | [**string**] | Filter Dealers based on the date range in which they were created. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **createdAtDays** | [**string**] | Dealer Creation days range to filter listings with the dealer created in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
| **provider** | [**boolean**] | boolean param to include site providers name in response | (optional) defaults to false|
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

**DealershipResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of dealership for the search |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchDealershipCarUk**
> DealershipResponse searchDealershipCarUk()

The dealerships API returns a list of dealerships around a given point and radius.

### Example

```typescript
import {
    DealershipAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DealershipAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let rows: number; //Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
let start: number; //Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
let country: 'uk' | 'england' | 'scotland' | 'northern ireland' | 'wales'; //To filter listing on Country in which they are listed (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let county: string; //To filter listing on county in which they are listed (optional) (default to undefined)
let inventoryUrl: Array<string>; //inventory_url of dealer to be searched (optional) (default to undefined)
let postalCode: string; //To filter listing on postal code around which they are listed (optional) (default to undefined)
let sortBy: string; //Sort by field. Default sort field is distance from the given point (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)
let provider: boolean; //boolean param to include site providers name in response (optional) (default to false)
let facets: string; //The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional) (default to undefined)
let rangeFacets: string; //The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional) (default to undefined)
let fcaStatus: Array<string>; //To filter on fca status (optional) (default to undefined)
let createdAtRange: string; //Filter Dealers based on the date range in which they were created. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional) (default to undefined)
let createdAtDays: string; //Dealer Creation days range to filter listings with the dealer created in the range given. Range to be given in the format - min-max e.g. 25-12 (optional) (default to undefined)
let mcWebsiteId: Array<number>; //To filter listings on their mc_website_id (optional) (default to undefined)
let mcDealerId: Array<number>; //To filter listings on their mc_dealer_id (optional) (default to undefined)
let mcLocationId: Array<number>; //To filter listings on their mc_location_id (optional) (default to undefined)
let mcRooftopId: Array<number>; //To filter listings on their mc_rooftop_id (optional) (default to undefined)
let mcDealershipGroupId: Array<number>; //To filter listings on their mc_dealership_group_id (optional) (default to undefined)
let mcDealershipGroupName: Array<string>; //To filter listings on their mc_dealership_group_name (optional) (default to undefined)
let mcSubDealershipGroupId: Array<number>; //To filter listings on their mc_sub_dealership_group_id (optional) (default to undefined)
let mcSubDealershipGroupName: Array<string>; //To filter listings on their mc_sub_dealership_group_name (optional) (default to undefined)
let mcCategory: 'Dealer' | 'Dealership Group' | 'Dealership Sub Group' | 'Retailer' | 'Aggregator' | 'FSBO' | 'Auction'; //Filter based on mc_category (optional) (default to undefined)

const { status, data } = await apiInstance.searchDealershipCarUk(
    apiKey,
    latitude,
    longitude,
    radius,
    rows,
    start,
    country,
    dealerType,
    city,
    county,
    inventoryUrl,
    postalCode,
    sortBy,
    sortOrder,
    provider,
    facets,
    rangeFacets,
    fcaStatus,
    createdAtRange,
    createdAtDays,
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
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **rows** | [**number**] | Number of results to return. Default is 10. Max is 50 | (optional) defaults to 10|
| **start** | [**number**] | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | (optional) defaults to 0|
| **country** | [**&#39;uk&#39; | &#39;england&#39; | &#39;scotland&#39; | &#39;northern ireland&#39; | &#39;wales&#39;**]**Array<&#39;uk&#39; &#124; &#39;england&#39; &#124; &#39;scotland&#39; &#124; &#39;northern ireland&#39; &#124; &#39;wales&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **county** | [**string**] | To filter listing on county in which they are listed | (optional) defaults to undefined|
| **inventoryUrl** | **Array&lt;string&gt;** | inventory_url of dealer to be searched | (optional) defaults to undefined|
| **postalCode** | [**string**] | To filter listing on postal code around which they are listed | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort by field. Default sort field is distance from the given point | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|
| **provider** | [**boolean**] | boolean param to include site providers name in response | (optional) defaults to false|
| **facets** | [**string**] | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | (optional) defaults to undefined|
| **rangeFacets** | [**string**] | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | (optional) defaults to undefined|
| **fcaStatus** | **Array&lt;string&gt;** | To filter on fca status | (optional) defaults to undefined|
| **createdAtRange** | [**string**] | Filter Dealers based on the date range in which they were created. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | (optional) defaults to undefined|
| **createdAtDays** | [**string**] | Dealer Creation days range to filter listings with the dealer created in the range given. Range to be given in the format - min-max e.g. 25-12 | (optional) defaults to undefined|
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

**DealershipResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of dealerships for the search |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

