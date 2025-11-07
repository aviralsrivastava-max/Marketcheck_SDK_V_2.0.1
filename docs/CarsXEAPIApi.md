# CarsXEAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarsxePlateDecoder**](#getcarsxeplatedecoder) | **GET** /carsxe/plate-decoder/{plate} | Decode the given vehicle\&#39;s registration/license plate number|

# **getCarsxePlateDecoder**
> PlateDecoder getCarsxePlateDecoder()

Get the decoded information of a vehicle\'s registration/license plate number

### Example

```typescript
import {
    CarsXEAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsXEAPIApi(configuration);

let plate: string; //The plate number to identify the car. (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let country: string; //Country of the number plate (optional) (default to 'US')
let state: string; //State of the number plate (optional) (default to undefined)

const { status, data } = await apiInstance.getCarsxePlateDecoder(
    plate,
    apiKey,
    country,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **plate** | [**string**] | The plate number to identify the car. | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **country** | [**string**] | Country of the number plate | (optional) defaults to 'US'|
| **state** | [**string**] | State of the number plate | (optional) defaults to undefined|


### Return type

**PlateDecoder**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Decoded information of the vehicle\&#39;s registration/license plate number |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

