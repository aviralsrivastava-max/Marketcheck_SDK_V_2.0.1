# ClientFiltersApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getClientConfig**](#getclientconfig) | **GET** /client/configure/get | get client filters|
|[**setClientConfig**](#setclientconfig) | **POST** /client/configure/set | set client filters|

# **getClientConfig**
> getClientConfig()

get client filters

### Example

```typescript
import {
    ClientFiltersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientFiltersApi(configuration);

let country: 'US' | 'CA' | 'UK'; //To filter listing on Country in which they are listed (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getClientConfig(
    country,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;UK&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;UK&#39;>** | To filter listing on Country in which they are listed | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully get client filters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setClientConfig**
> setClientConfig()

set client filters

### Example

```typescript
import {
    ClientFiltersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientFiltersApi(configuration);

let country: 'US' | 'CA' | 'UK'; //To filter listing on Country in which they are listed (default to undefined)
let csvfile: File; //csv file with filters (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.setClientConfig(
    country,
    csvfile,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;UK&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;UK&#39;>** | To filter listing on Country in which they are listed | defaults to undefined|
| **csvfile** | [**File**] | csv file with filters | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully set client filters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

