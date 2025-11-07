# VINDataReportApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accessVindataReportAamva**](#accessvindatareportaamva) | **GET** /vindata/access-report/aamva/{vin} | Access Vin Data Report by vin|
|[**generateVindataReportAamva**](#generatevindatareportaamva) | **GET** /vindata/generate-report/aamva/{vin} | Generate Vin Data Report by vin|

# **accessVindataReportAamva**
> VinDataReport accessVindataReportAamva()

Get a particular Raw Vin Data Report for a vin from previously generated reports if available

### Example

```typescript
import {
    VINDataReportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDataReportApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.accessVindataReportAamva(
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

**VinDataReport**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw Vin Data Report for the given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateVindataReportAamva**
> VinDataReport generateVindataReportAamva()

Get a particular Raw Vin Data Report for a vin from VINData

### Example

```typescript
import {
    VINDataReportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDataReportApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.generateVindataReportAamva(
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

**VinDataReport**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw Vin Data Report for the given vin |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

