# CarsHistoryAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarHistory**](#getcarhistory) | **GET** /history/car/{vin} | Get a cars online listing history|
|[**getCarUkHistory**](#getcarukhistory) | **GET** /history/car/uk/{vrm} | Get a cars online listing history|

# **getCarHistory**
> Array<HistoricalListing> getCarHistory()

The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date

### Example

```typescript
import {
    CarsHistoryAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsHistoryAPIApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let fields: string; //List of fields to fetch, in case the default fields list in the response is to be trimmed down (optional) (default to undefined)
let page: number; //Page number to fetch the results for the given criteria. Default is 1. (optional) (default to undefined)
let includeDuplicates: boolean; //Flag to indicate whether to include duplicate historical records as well in the response (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)

const { status, data } = await apiInstance.getCarHistory(
    vin,
    apiKey,
    fields,
    page,
    includeDuplicates,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **fields** | [**string**] | List of fields to fetch, in case the default fields list in the response is to be trimmed down | (optional) defaults to undefined|
| **page** | [**number**] | Page number to fetch the results for the given criteria. Default is 1. | (optional) defaults to undefined|
| **includeDuplicates** | [**boolean**] | Flag to indicate whether to include duplicate historical records as well in the response | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|


### Return type

**Array<HistoricalListing>**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Online listing history for the given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarUkHistory**
> Array<HistoricalListing> getCarUkHistory()

The history API returns online listing history for a car identified by its VRM. History listings are sorted in the descending order of the listing date / last seen date

### Example

```typescript
import {
    CarsHistoryAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsHistoryAPIApi(configuration);

let vrm: string; //The VRM to identify the car. (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let page: number; //Page number to fetch the results for the given criteria. Default is 1. (optional) (default to undefined)
let includeDuplicates: boolean; //Flag to indicate whether to include duplicate historical records as well in the response (optional) (default to undefined)
let sortOrder: 'asc' | 'desc' | 'ASC' | 'DESC'; //Sort order - asc or desc. Default sort order is asc (optional) (default to undefined)

const { status, data } = await apiInstance.getCarUkHistory(
    vrm,
    apiKey,
    page,
    includeDuplicates,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vrm** | [**string**] | The VRM to identify the car. | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **page** | [**number**] | Page number to fetch the results for the given criteria. Default is 1. | (optional) defaults to undefined|
| **includeDuplicates** | [**boolean**] | Flag to indicate whether to include duplicate historical records as well in the response | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39; | &#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39; &#124; &#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order - asc or desc. Default sort order is asc | (optional) defaults to undefined|


### Return type

**Array<HistoricalListing>**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Online listing history for the given vrm |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

