# CarCachedImageApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarCachedImage**](#getcarcachedimage) | **GET** /image/cache/car/{listingID}/{imageID} | Fetch cached image|

# **getCarCachedImage**
> File getCarCachedImage()

Fetch the cached car image

### Example

```typescript
import {
    CarCachedImageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarCachedImageApi(configuration);

let listingID: string; //ID of the listing to fetch cached images for (default to undefined)
let imageID: string; //ID of the image to fetch (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.getCarCachedImage(
    listingID,
    imageID,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listingID** | [**string**] | ID of the listing to fetch cached images for | defaults to undefined|
| **imageID** | [**string**] | ID of the image to fetch | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cached image of the car |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

