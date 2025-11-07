# CRMCleanseAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkCarCrm**](#checkcarcrm) | **GET** /crm_check/car/{vin} | CRM check of a particular vin|

# **checkCarCrm**
> CRMResponse checkCarCrm()

Check whether particular vin has had a listing after stipulated date or not

### Example

```typescript
import {
    CRMCleanseAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CRMCleanseAPIApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let saleDate: string; //sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.checkCarCrm(
    vin,
    saleDate,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **saleDate** | [**string**] | sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|


### Return type

**CRMResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CRM check for given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

