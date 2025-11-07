# RecallSearchApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarAutorecalls**](#getcarautorecalls) | **GET** /car/autorecalls/{vin} | Autorecall\&#39;s Recall info by vin|
|[**getCarRecall**](#getcarrecall) | **GET** /car/recall/{vin} | Recall info by vin|

# **getCarAutorecalls**
> getCarAutorecalls()

Get a particular recall information for a vin from AutoRecall

### Example

```typescript
import {
    RecallSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecallSearchApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarAutorecalls(
    vin,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Autorecall\&#39;s Recall info for the given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCarRecall**
> SearchResponse getCarRecall()

Get a particular recall information for a vin

### Example

```typescript
import {
    RecallSearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecallSearchApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let page: number; //Page number to fetch the results for the given criteria. Default is 1. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarRecall(
    vin,
    apiKey,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **page** | [**number**] | Page number to fetch the results for the given criteria. Default is 1. | (optional) defaults to undefined|


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
|**200** | Reacll info for the given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

