# UKCarSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoCompleteCarUk**](#autocompletecaruk) | **GET** /search/car/uk/auto-complete | API for auto-completion of inputs|

# **autoCompleteCarUk**
> SearchAutoCompleteResponse autoCompleteCarUk()

Auto-complete the inputs of your end users

### Example

```typescript
import {
    UKCarSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UKCarSearchApi(configuration);

let field: 'ymm' | 'mm' | 'make' | 'model' | 'variant' | 'body_type' | 'body_subtype' | 'vehicle_type' | 'transmission' | 'drivetrain' | 'fuel_type' | 'exterior_color' | 'interior_color' | 'engine' | 'engine_size' | 'engine_block' | 'city' | 'county' | 'car_location_city' | 'car_location_county' | 'model_variant' | 'dealer_name' | 'ev_battery_type'; //Field name for which you want auto-completion (default to undefined)
let input: string; //Input entered so far (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let variant: Array<string>; //To filter listing on their variant (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let dealerName: Array<string>; //Filter listings on dealer_name (optional) (default to undefined)
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
let county: string; //To filter listing on county in which they are listed (optional) (default to undefined)
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
let country: 'uk' | 'england' | 'scotland' | 'northern ireland' | 'wales'; //To filter listing on Country in which they are listed (optional) (default to 'uk')
let includeNonVinListings: 'true' | 'false'; //Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results (optional) (default to 'false')
let ignoreCase: boolean; //Boolean variable to indicate ignore case of current input (optional) (default to true)
let termCounts: boolean; //Boolean variable to indicate wheather to include term counts as well in response (optional) (default to false)
let sortBy: 'index' | 'count'; //Sort the response, either by index or count(default) (optional) (default to 'index')
let sellerType: string; //seller type for autocomplete (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let postalCode: string; //To filter listing on postal code around which they are listed (optional) (default to undefined)
let inventoryCountRange: string; //Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let excludeDealerIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeMcWebsiteIds: Array<string>; //A list of dealer ids to exclude from result (optional) (default to undefined)
let excludeSources: Array<string>; //A list of sources to exclude from result (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let facetMinCount: number; //Provide minimum count value for facets (optional) (default to 1)
let excludeMake: Array<string>; //A list of makes to exclude from result (optional) (default to undefined)

const { status, data } = await apiInstance.autoCompleteCarUk(
    field,
    input,
    apiKey,
    year,
    make,
    model,
    variant,
    bodyType,
    dealerName,
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
    county,
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
    includeNonVinListings,
    ignoreCase,
    termCounts,
    sortBy,
    sellerType,
    radius,
    zip,
    postalCode,
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
| **field** | [**&#39;ymm&#39; | &#39;mm&#39; | &#39;make&#39; | &#39;model&#39; | &#39;variant&#39; | &#39;body_type&#39; | &#39;body_subtype&#39; | &#39;vehicle_type&#39; | &#39;transmission&#39; | &#39;drivetrain&#39; | &#39;fuel_type&#39; | &#39;exterior_color&#39; | &#39;interior_color&#39; | &#39;engine&#39; | &#39;engine_size&#39; | &#39;engine_block&#39; | &#39;city&#39; | &#39;county&#39; | &#39;car_location_city&#39; | &#39;car_location_county&#39; | &#39;model_variant&#39; | &#39;dealer_name&#39; | &#39;ev_battery_type&#39;**]**Array<&#39;ymm&#39; &#124; &#39;mm&#39; &#124; &#39;make&#39; &#124; &#39;model&#39; &#124; &#39;variant&#39; &#124; &#39;body_type&#39; &#124; &#39;body_subtype&#39; &#124; &#39;vehicle_type&#39; &#124; &#39;transmission&#39; &#124; &#39;drivetrain&#39; &#124; &#39;fuel_type&#39; &#124; &#39;exterior_color&#39; &#124; &#39;interior_color&#39; &#124; &#39;engine&#39; &#124; &#39;engine_size&#39; &#124; &#39;engine_block&#39; &#124; &#39;city&#39; &#124; &#39;county&#39; &#124; &#39;car_location_city&#39; &#124; &#39;car_location_county&#39; &#124; &#39;model_variant&#39; &#124; &#39;dealer_name&#39; &#124; &#39;ev_battery_type&#39;>** | Field name for which you want auto-completion | defaults to undefined|
| **input** | [**string**] | Input entered so far | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **variant** | **Array&lt;string&gt;** | To filter listing on their variant | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **dealerName** | **Array&lt;string&gt;** | Filter listings on dealer_name | (optional) defaults to undefined|
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
| **county** | [**string**] | To filter listing on county in which they are listed | (optional) defaults to undefined|
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
| **country** | [**&#39;uk&#39; | &#39;england&#39; | &#39;scotland&#39; | &#39;northern ireland&#39; | &#39;wales&#39;**]**Array<&#39;uk&#39; &#124; &#39;england&#39; &#124; &#39;scotland&#39; &#124; &#39;northern ireland&#39; &#124; &#39;wales&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'uk'|
| **includeNonVinListings** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results | (optional) defaults to 'false'|
| **ignoreCase** | [**boolean**] | Boolean variable to indicate ignore case of current input | (optional) defaults to true|
| **termCounts** | [**boolean**] | Boolean variable to indicate wheather to include term counts as well in response | (optional) defaults to false|
| **sortBy** | [**&#39;index&#39; | &#39;count&#39;**]**Array<&#39;index&#39; &#124; &#39;count&#39;>** | Sort the response, either by index or count(default) | (optional) defaults to 'index'|
| **sellerType** | [**string**] | seller type for autocomplete | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **postalCode** | [**string**] | To filter listing on postal code around which they are listed | (optional) defaults to undefined|
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

