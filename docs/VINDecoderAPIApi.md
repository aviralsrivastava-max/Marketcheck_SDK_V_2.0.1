# VINDecoderAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoCompleteCarSpecs**](#autocompletecarspecs) | **GET** /specs/car/auto-complete | API for auto-completion of inputs based on taxonomy|
|[**decodeCar**](#decodecar) | **GET** /decode/car/{vin}/specs | VIN Decoder|
|[**decodeCarVinEpi**](#decodecarvinepi) | **GET** /decode/car/epi/{vin}/specs | EPI VIN Decoder|
|[**decodeCarVinNeovin**](#decodecarvinneovin) | **GET** /decode/car/neovin/{vin}/specs | NeoVIN Decoder|
|[**getSpecsCarTerms**](#getspecscarterms) | **GET** /specs/car/terms | API for getting terms from taxonomy|

# **autoCompleteCarSpecs**
> SpecsAutoCompleteResponse autoCompleteCarSpecs()

Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)

### Example

```typescript
import {
    VINDecoderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDecoderAPIApi(configuration);

let field: 'make' | 'model' | 'trim' | 'body_type' | 'body_subtype' | 'vehicle_type' | 'transmission' | 'drivetrain' | 'fuel_type' | 'engine' | 'engine_size' | 'engine_block' | 'version' | 'powertrain_type'; //Field name for which you want auto-completion (default to undefined)
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
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let ignoreCase: boolean; //Boolean variable to indicate ignore case of current input (optional) (default to true)
let facetMinCount: number; //Provide minimum count value for facets (optional) (default to 1)

const { status, data } = await apiInstance.autoCompleteCarSpecs(
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
    engine,
    engineSize,
    engineBlock,
    ignoreCase,
    facetMinCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **field** | [**&#39;make&#39; | &#39;model&#39; | &#39;trim&#39; | &#39;body_type&#39; | &#39;body_subtype&#39; | &#39;vehicle_type&#39; | &#39;transmission&#39; | &#39;drivetrain&#39; | &#39;fuel_type&#39; | &#39;engine&#39; | &#39;engine_size&#39; | &#39;engine_block&#39; | &#39;version&#39; | &#39;powertrain_type&#39;**]**Array<&#39;make&#39; &#124; &#39;model&#39; &#124; &#39;trim&#39; &#124; &#39;body_type&#39; &#124; &#39;body_subtype&#39; &#124; &#39;vehicle_type&#39; &#124; &#39;transmission&#39; &#124; &#39;drivetrain&#39; &#124; &#39;fuel_type&#39; &#124; &#39;engine&#39; &#124; &#39;engine_size&#39; &#124; &#39;engine_block&#39; &#124; &#39;version&#39; &#124; &#39;powertrain_type&#39;>** | Field name for which you want auto-completion | defaults to undefined|
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
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **ignoreCase** | [**boolean**] | Boolean variable to indicate ignore case of current input | (optional) defaults to true|
| **facetMinCount** | [**number**] | Provide minimum count value for facets | (optional) defaults to 1|


### Return type

**SpecsAutoCompleteResponse**

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

# **decodeCar**
> Build decodeCar()

Get the basic information on specifications for a car identified by a valid VIN

### Example

```typescript
import {
    VINDecoderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDecoderAPIApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL'; //To filter listing on Country in which they are listed (optional) (default to 'US')

const { status, data } = await apiInstance.decodeCar(
    vin,
    apiKey,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39; | &#39;all&#39; | &#39;ALL&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;all&#39; &#124; &#39;ALL&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to 'US'|


### Return type

**Build**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Basic sepcifications details about the car |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decodeCarVinEpi**
> Build decodeCarVinEpi()

Get the basic information on specifications for a car identified by a valid VIN from EPI\'s decoder

### Example

```typescript
import {
    VINDecoderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDecoderAPIApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)

const { status, data } = await apiInstance.decodeCarVinEpi(
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

**Build**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Basic sepcifications details about the car |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decodeCarVinNeovin**
> NeoVIN decodeCarVinNeovin()

Get the basic information on specifications for a car identified by a valid VIN from NeoVIN decoder

### Example

```typescript
import {
    VINDecoderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDecoderAPIApi(configuration);

let vin: string; //The VIN to identify the car. Must be a valid 17 char VIN (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let includeGeneric: boolean; //Boolean variable to indicate wheather to include generic data as well in response (optional) (default to false)
let forceDecode: boolean; //Decode VIN on the fly instead of cached response (optional) (default to false)
let includeAvlOpts: boolean; //Include available options in the response (optional) (default to false)
let includeAvailableOptions: boolean; //Include all available options in the response, works without force_decode (optional) (default to false)

const { status, data } = await apiInstance.decodeCarVinNeovin(
    vin,
    apiKey,
    includeGeneric,
    forceDecode,
    includeAvlOpts,
    includeAvailableOptions
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vin** | [**string**] | The VIN to identify the car. Must be a valid 17 char VIN | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **includeGeneric** | [**boolean**] | Boolean variable to indicate wheather to include generic data as well in response | (optional) defaults to false|
| **forceDecode** | [**boolean**] | Decode VIN on the fly instead of cached response | (optional) defaults to false|
| **includeAvlOpts** | [**boolean**] | Include available options in the response | (optional) defaults to false|
| **includeAvailableOptions** | [**boolean**] | Include all available options in the response, works without force_decode | (optional) defaults to false|


### Return type

**NeoVIN**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Basic sepcifications details about the car |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSpecsCarTerms**
> SpecsAutoCompleteResponse getSpecsCarTerms()

Facets on taxonomy

### Example

```typescript
import {
    VINDecoderAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VINDecoderAPIApi(configuration);

let field: string; //Comma separated list of fields to get terms for (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let country: 'US' | 'CA' | 'us' | 'ca'; //To filter listing on Country in which they are listed (optional) (default to undefined)
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
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)

const { status, data } = await apiInstance.getSpecsCarTerms(
    field,
    apiKey,
    country,
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
    engine,
    engineSize,
    engineBlock
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **field** | [**string**] | Comma separated list of fields to get terms for | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **country** | [**&#39;US&#39; | &#39;CA&#39; | &#39;us&#39; | &#39;ca&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;us&#39; &#124; &#39;ca&#39;>** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
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
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|


### Return type

**SpecsAutoCompleteResponse**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of unique terms for specified fields |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

