# CarsMarketAPIApi

All URIs are relative to *https://api.marketcheck.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCarStats**](#getcarstats) | **GET** /stats/car | Price, Miles and Days on Market stats|
|[**getMdsCar**](#getmdscar) | **GET** /mds/car | Market Days Supply|
|[**getPopularCars**](#getpopularcars) | **GET** /popular/cars | Get make model wise top 50 popular cars on national, state, city level|
|[**getSalesCarCount**](#getsalescarcount) | **GET** /sales/car | Get sales count by make, model, year, trim or taxonomy vin|
|[**predictCarPrice**](#predictcarprice) | **GET** /predict/car/price | Predict car price based on it\&#39;s specifications|
|[**predictCarUkFmv**](#predictcarukfmv) | **GET** /predict/car/uk/fmv | Predict fare value of car for UK based on YMMT &amp; miles|
|[**predictCarUkMarketcheckPrice**](#predictcarukmarketcheckprice) | **GET** /predict/car/uk/marketcheck_price | Predicts the retail dealer listing price for a used car in the UK market|
|[**predictCarUkMarketcheckPriceComparables**](#predictcarukmarketcheckpricecomparables) | **GET** /predict/car/uk/marketcheck_price/comparables | Predict Marketcheck car price based on it\&#39;s specifications with comparables|
|[**predictCarUkPrice**](#predictcarukprice) | **GET** /predict/car/uk/price | Predict car price for UK based on it\&#39;s specifications|
|[**predictCarUsMarketcheckPrice**](#predictcarusmarketcheckprice) | **GET** /predict/car/us/marketcheck_price | Predict Marketcheck car price based on it\&#39;s specifications|
|[**predictCarUsMarketcheckPriceComparables**](#predictcarusmarketcheckpricecomparables) | **GET** /predict/car/us/marketcheck_price/comparables | Predict Marketcheck car price based on it\&#39;s specifications|
|[**predictCarUsMarketcheckPriceComparablesDecode**](#predictcarusmarketcheckpricecomparablesdecode) | **GET** /predict/car/us/marketcheck_price/comparables/decode | Predict Marketcheck car price based on it\&#39;s specifications|

# **getCarStats**
> DailyStats getCarStats()

National, state and city level stats for price, miles and dom

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let country: 'us' | 'ca'; //Country for which the stats are to be searched (optional) (default to 'us')
let carType: 'new' | 'used'; //Inventory type for which stats are to be searched, default is used (optional) (default to 'used')
let ymm: string; //Year, Make, Model of the car, Separated by pipe e.g. ymm=2015|ford|f-150 (optional) (default to undefined)
let ymmt: string; //Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015|ford|f-150|platinum (optional) (default to undefined)
let taxonomyVin: string; //Taxonomy vin for referance to find stats of similar cars (optional) (default to undefined)
let vin: string; //VIN that will be transformed to taxonomy_vin (optional) (default to undefined)
let state: string; //State level stats (optional) (default to undefined)
let cityState: string; //City level stats, pipe seperated like city_state=jacksonville|FL (optional) (default to undefined)

const { status, data } = await apiInstance.getCarStats(
    apiKey,
    country,
    carType,
    ymm,
    ymmt,
    taxonomyVin,
    vin,
    state,
    cityState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **country** | [**&#39;us&#39; | &#39;ca&#39;**]**Array<&#39;us&#39; &#124; &#39;ca&#39;>** | Country for which the stats are to be searched | (optional) defaults to 'us'|
| **carType** | [**&#39;new&#39; | &#39;used&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39;>** | Inventory type for which stats are to be searched, default is used | (optional) defaults to 'used'|
| **ymm** | [**string**] | Year, Make, Model of the car, Separated by pipe e.g. ymm&#x3D;2015|ford|f-150 | (optional) defaults to undefined|
| **ymmt** | [**string**] | Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt&#x3D;2015|ford|f-150|platinum | (optional) defaults to undefined|
| **taxonomyVin** | [**string**] | Taxonomy vin for referance to find stats of similar cars | (optional) defaults to undefined|
| **vin** | [**string**] | VIN that will be transformed to taxonomy_vin | (optional) defaults to undefined|
| **state** | [**string**] | State level stats | (optional) defaults to undefined|
| **cityState** | [**string**] | City level stats, pipe seperated like city_state&#x3D;jacksonville|FL | (optional) defaults to undefined|


### Return type

**DailyStats**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data with Market averages and stats |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMdsCar**
> Mds getMdsCar()

Get the basic information on specifications for a car identified by a valid VIN

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vin: string; //VIN to decode (optional) (default to undefined)
let exact: boolean; //Exact parameter (optional) (default to false)
let latitude: number; //Latitude component of location (optional) (default to undefined)
let longitude: number; //Longitude component of location (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)
let zip: string; //To filter listing on ZIP around which they are listed (optional) (default to undefined)
let msaCode: Array<string>; //To filter listing on msa code in which they are listed (optional) (default to undefined)
let debug: boolean; //Debug parameter (optional) (default to false)
let includeSold: boolean; //To fetch sold vins (optional) (default to false)
let country: Array<string>; //To filter listing on Country in which they are listed (optional) (default to undefined)
let state: Array<string>; //To filter listing on State in which they are listed (optional) (default to undefined)
let city: Array<string>; //To filter listing on City in which they are listed (optional) (default to undefined)
let ymmt: string; //Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \'|\' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \'year|make||\' or \'year|make|model\' or \'|make|model|\' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \'vins\' or \'taxonomy_vins\' parameter to the search api instead the year|make|model|trim combinations. (optional) (default to undefined)
let carType: 'new' | 'used' | 'certified'; //Car type. Allowed values are - new / used / certified (optional) (default to undefined)
let leaseTerm: string; //Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional) (default to undefined)
let leaseDownPayment: string; //Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional) (default to undefined)
let leaseEmp: string; //Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional) (default to undefined)
let financeLoanTerm: string; //Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional) (default to undefined)
let financeLoanApr: string; //Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional) (default to undefined)
let financeEmp: string; //Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional) (default to undefined)
let financeDownPayment: string; //Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional) (default to undefined)
let financeDownPaymentPer: string; //Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional) (default to undefined)
let carfax1Owner: 'true' | 'false'; //Indicates whether car has had only one owner or not (optional) (default to undefined)
let carfaxCleanTitle: 'true' | 'false'; //Indicates whether car has clean ownership records (optional) (default to undefined)
let year: Array<string>; //To filter listing on their year (optional) (default to undefined)
let make: Array<string>; //To filter listings on their make (optional) (default to undefined)
let model: Array<string>; //To filter listings on their model (optional) (default to undefined)
let trim: Array<string>; //To filter listing on their trim (optional) (default to undefined)
let dealerId: Array<string>; //Dealer id to filter the listings. (optional) (default to undefined)
let source: Array<string>; //To filter listing on their source (optional) (default to undefined)
let bodyType: Array<string>; //To filter listing on their body type (optional) (default to undefined)
let bodySubtype: Array<string>; //Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional) (default to undefined)
let vehicleType: Array<string>; //To filter listing on their vehicle type (optional) (default to undefined)
let cylinders: Array<string>; //To filter listing on their cylinders (optional) (default to undefined)
let transmission: Array<string>; //To filter listing on their transmission (optional) (default to undefined)
let doors: Array<string>; //Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional) (default to undefined)
let drivetrain: Array<string>; //To filter listing on their drivetrain (optional) (default to undefined)
let exteriorColor: Array<string>; //Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional) (default to undefined)
let interiorColor: Array<string>; //Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional) (default to undefined)
let baseExteriorColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseInteriorColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseExtColor: Array<string>; //Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let baseIntColor: Array<string>; //Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional) (default to undefined)
let engine: Array<string>; //To filter listing on their engine (optional) (default to undefined)
let engineSize: Array<string>; //Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional) (default to undefined)
let engineAspiration: Array<string>; //Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional) (default to undefined)
let engineBlock: Array<string>; //Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional) (default to undefined)
let highwayMpgRange: string; //Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let cityMpgRange: string; //City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let milesRange: string; //Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let priceRange: string; //Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let msrpRange: string; //MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to undefined)
let domRange: string; //Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dealershipGroupName: Array<string>; //Name of the dealership group to search for (optional) (default to undefined)
let domActiveRange: string; //Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let dom180Range: string; //Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)
let fuelType: Array<string>; //To filter listing on their fuel type (optional) (default to undefined)
let dealerType: 'franchise' | 'independent'; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let engineSizeRange: string; //Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional) (default to undefined)
let inTransit: Array<string>; //A boolean to filter in transit vehicles (optional) (default to undefined)
let dosActiveRange: string; //Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 (optional) (default to undefined)

const { status, data } = await apiInstance.getMdsCar(
    apiKey,
    vin,
    exact,
    latitude,
    longitude,
    radius,
    zip,
    msaCode,
    debug,
    includeSold,
    country,
    state,
    city,
    ymmt,
    carType,
    leaseTerm,
    leaseDownPayment,
    leaseEmp,
    financeLoanTerm,
    financeLoanApr,
    financeEmp,
    financeDownPayment,
    financeDownPaymentPer,
    carfax1Owner,
    carfaxCleanTitle,
    year,
    make,
    model,
    trim,
    dealerId,
    source,
    bodyType,
    bodySubtype,
    vehicleType,
    cylinders,
    transmission,
    doors,
    drivetrain,
    exteriorColor,
    interiorColor,
    baseExteriorColor,
    baseInteriorColor,
    baseExtColor,
    baseIntColor,
    engine,
    engineSize,
    engineAspiration,
    engineBlock,
    highwayMpgRange,
    cityMpgRange,
    milesRange,
    priceRange,
    msrpRange,
    domRange,
    dealershipGroupName,
    domActiveRange,
    dom180Range,
    fuelType,
    dealerType,
    engineSizeRange,
    inTransit,
    dosActiveRange
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vin** | [**string**] | VIN to decode | (optional) defaults to undefined|
| **exact** | [**boolean**] | Exact parameter | (optional) defaults to false|
| **latitude** | [**number**] | Latitude component of location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of location | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|
| **zip** | [**string**] | To filter listing on ZIP around which they are listed | (optional) defaults to undefined|
| **msaCode** | **Array&lt;string&gt;** | To filter listing on msa code in which they are listed | (optional) defaults to undefined|
| **debug** | [**boolean**] | Debug parameter | (optional) defaults to false|
| **includeSold** | [**boolean**] | To fetch sold vins | (optional) defaults to false|
| **country** | **Array&lt;string&gt;** | To filter listing on Country in which they are listed | (optional) defaults to undefined|
| **state** | **Array&lt;string&gt;** | To filter listing on State in which they are listed | (optional) defaults to undefined|
| **city** | **Array&lt;string&gt;** | To filter listing on City in which they are listed | (optional) defaults to undefined|
| **ymmt** | [**string**] | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe \&#39;|\&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - \&#39;year|make||\&#39; or \&#39;year|make|model\&#39; or \&#39;|make|model|\&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the \&#39;vins\&#39; or \&#39;taxonomy_vins\&#39; parameter to the search api instead the year|make|model|trim combinations. | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39; | &#39;certified&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39; &#124; &#39;certified&#39;>** | Car type. Allowed values are - new / used / certified | (optional) defaults to undefined|
| **leaseTerm** | [**string**] | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | (optional) defaults to undefined|
| **leaseDownPayment** | [**string**] | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **leaseEmp** | [**string**] | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanTerm** | [**string**] | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | (optional) defaults to undefined|
| **financeLoanApr** | [**string**] | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | (optional) defaults to undefined|
| **financeEmp** | [**string**] | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPayment** | [**string**] | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | (optional) defaults to undefined|
| **financeDownPaymentPer** | [**string**] | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | (optional) defaults to undefined|
| **carfax1Owner** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has had only one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Indicates whether car has clean ownership records | (optional) defaults to undefined|
| **year** | **Array&lt;string&gt;** | To filter listing on their year | (optional) defaults to undefined|
| **make** | **Array&lt;string&gt;** | To filter listings on their make | (optional) defaults to undefined|
| **model** | **Array&lt;string&gt;** | To filter listings on their model | (optional) defaults to undefined|
| **trim** | **Array&lt;string&gt;** | To filter listing on their trim | (optional) defaults to undefined|
| **dealerId** | **Array&lt;string&gt;** | Dealer id to filter the listings. | (optional) defaults to undefined|
| **source** | **Array&lt;string&gt;** | To filter listing on their source | (optional) defaults to undefined|
| **bodyType** | **Array&lt;string&gt;** | To filter listing on their body type | (optional) defaults to undefined|
| **bodySubtype** | **Array&lt;string&gt;** | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | (optional) defaults to undefined|
| **vehicleType** | **Array&lt;string&gt;** | To filter listing on their vehicle type | (optional) defaults to undefined|
| **cylinders** | **Array&lt;string&gt;** | To filter listing on their cylinders | (optional) defaults to undefined|
| **transmission** | **Array&lt;string&gt;** | To filter listing on their transmission | (optional) defaults to undefined|
| **doors** | **Array&lt;string&gt;** | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | (optional) defaults to undefined|
| **drivetrain** | **Array&lt;string&gt;** | To filter listing on their drivetrain | (optional) defaults to undefined|
| **exteriorColor** | **Array&lt;string&gt;** | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | (optional) defaults to undefined|
| **interiorColor** | **Array&lt;string&gt;** | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | (optional) defaults to undefined|
| **baseExteriorColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseInteriorColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseExtColor** | **Array&lt;string&gt;** | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **baseIntColor** | **Array&lt;string&gt;** | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | (optional) defaults to undefined|
| **engine** | **Array&lt;string&gt;** | To filter listing on their engine | (optional) defaults to undefined|
| **engineSize** | **Array&lt;string&gt;** | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | (optional) defaults to undefined|
| **engineAspiration** | **Array&lt;string&gt;** | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | (optional) defaults to undefined|
| **engineBlock** | **Array&lt;string&gt;** | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | (optional) defaults to undefined|
| **highwayMpgRange** | [**string**] | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **cityMpgRange** | [**string**] | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **milesRange** | [**string**] | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **priceRange** | [**string**] | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **msrpRange** | [**string**] | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | (optional) defaults to undefined|
| **domRange** | [**string**] | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dealershipGroupName** | **Array&lt;string&gt;** | Name of the dealership group to search for | (optional) defaults to undefined|
| **domActiveRange** | [**string**] | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **dom180Range** | [**string**] | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|
| **fuelType** | **Array&lt;string&gt;** | To filter listing on their fuel type | (optional) defaults to undefined|
| **dealerType** | [**&#39;franchise&#39; | &#39;independent&#39;**]**Array<&#39;franchise&#39; &#124; &#39;independent&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **engineSizeRange** | [**string**] | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | (optional) defaults to undefined|
| **inTransit** | **Array&lt;string&gt;** | A boolean to filter in transit vehicles | (optional) defaults to undefined|
| **dosActiveRange** | [**string**] | Active Days on Site range to filter cars with the DOS within the given range. Range to be given in the format - min-max e.g. 10-50 | (optional) defaults to undefined|


### Return type

**Mds**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Provides Market Days supply for year make model or trim combination |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPopularCars**
> PopularCars getPopularCars()

Get make model wise top 50 popular cars on national, state, city level

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let carType: 'new' | 'used'; //Inventory type for which popular count is to be searched (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let state: string; //State level sales count (optional) (default to undefined)
let cityState: string; //City level sales count, pipe seperated like city_state=jacksonville|FL (optional) (default to undefined)
let country: 'us' | 'ca' | 'US' | 'CA'; //Country for which the popular cars are to be searched (optional) (default to 'us')

const { status, data } = await apiInstance.getPopularCars(
    carType,
    apiKey,
    state,
    cityState,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carType** | [**&#39;new&#39; | &#39;used&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39;>** | Inventory type for which popular count is to be searched | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **state** | [**string**] | State level sales count | (optional) defaults to undefined|
| **cityState** | [**string**] | City level sales count, pipe seperated like city_state&#x3D;jacksonville|FL | (optional) defaults to undefined|
| **country** | [**&#39;us&#39; | &#39;ca&#39; | &#39;US&#39; | &#39;CA&#39;**]**Array<&#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;US&#39; &#124; &#39;CA&#39;>** | Country for which the popular cars are to be searched | (optional) defaults to 'us'|


### Return type

**PopularCars**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of most popular top 50 cars |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSalesCarCount**
> Sales getSalesCarCount()

Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let carType: 'new' | 'used'; //Inventory type for which sales count is to be searched, default is used (optional) (default to 'used')
let make: string; //Make for which sales count is to be searched (optional) (default to undefined)
let mm: string; //Make-Model for which sales count is to be searched, pipe seperated like mm=ford|f-150 (optional) (default to undefined)
let ymm: string; //Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015|ford|f-150 (optional) (default to undefined)
let ymmt: string; //Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015|ford|f-150|platinum (optional) (default to undefined)
let taxonomyVin: string; //taxonomy_vin for which sales count is to be searched (optional) (default to undefined)
let state: string; //State level sales count (optional) (default to undefined)
let cityState: string; //City level sales count, pipe seperated like city_state=jacksonville|FL (optional) (default to undefined)
let vin: string; //VIN that will be transformed to taxonomy_vin (optional) (default to undefined)
let country: 'us' | 'ca' | 'US' | 'CA'; //Country for which the sales records are to be searched (optional) (default to 'us')

const { status, data } = await apiInstance.getSalesCarCount(
    apiKey,
    carType,
    make,
    mm,
    ymm,
    ymmt,
    taxonomyVin,
    state,
    cityState,
    vin,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **carType** | [**&#39;new&#39; | &#39;used&#39;**]**Array<&#39;new&#39; &#124; &#39;used&#39;>** | Inventory type for which sales count is to be searched, default is used | (optional) defaults to 'used'|
| **make** | [**string**] | Make for which sales count is to be searched | (optional) defaults to undefined|
| **mm** | [**string**] | Make-Model for which sales count is to be searched, pipe seperated like mm&#x3D;ford|f-150 | (optional) defaults to undefined|
| **ymm** | [**string**] | Year-Make-Model for which sales count is to be searched, pipe seperated like ymm&#x3D;2015|ford|f-150 | (optional) defaults to undefined|
| **ymmt** | [**string**] | Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt&#x3D;2015|ford|f-150|platinum | (optional) defaults to undefined|
| **taxonomyVin** | [**string**] | taxonomy_vin for which sales count is to be searched | (optional) defaults to undefined|
| **state** | [**string**] | State level sales count | (optional) defaults to undefined|
| **cityState** | [**string**] | City level sales count, pipe seperated like city_state&#x3D;jacksonville|FL | (optional) defaults to undefined|
| **vin** | [**string**] | VIN that will be transformed to taxonomy_vin | (optional) defaults to undefined|
| **country** | [**&#39;us&#39; | &#39;ca&#39; | &#39;US&#39; | &#39;CA&#39;**]**Array<&#39;us&#39; &#124; &#39;ca&#39; &#124; &#39;US&#39; &#124; &#39;CA&#39;>** | Country for which the sales records are to be searched | (optional) defaults to 'us'|


### Return type

**Sales**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sales count for given parameters |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarPrice**
> PricePrediction predictCarPrice()

Predict car price based on it\'s specifications

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let carType: 'used' | 'new'; //Car condition (default to undefined)
let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vin: string; //Predict price for a VIN (optional) (default to undefined)
let year: number; //Car manufacturing year (optional) (default to undefined)
let make: string; //Car\'s make (optional) (default to undefined)
let model: string; //Car\'s model (optional) (default to undefined)
let trim: string; //Car\'s trim (optional) (default to undefined)
let isCertified: boolean; //Boolean to indicate car is certified or not (optional) (default to undefined)
let carfax1Owner: boolean; //Boolean to indicate car is carfax one owner or not (optional) (default to undefined)
let carfaxCleanTitle: boolean; //Boolean to indicate car has clean title or not (optional) (default to undefined)
let baseExteriorColor: string; //Base exterior color of the car (optional) (default to undefined)
let baseInteriorColor: string; //Base interior color of the car (optional) (default to undefined)
let transmission: 'Manual' | 'Automatic'; //Transmission on the car (optional) (default to undefined)
let drivetrain: '4WD' | 'AWD' | 'FWD' | 'RWD'; //Drivetrain on the car (optional) (default to undefined)
let engineSize: number; //Engine Size of the car (optional) (default to undefined)
let engineBlock: 'I' | 'V' | 'H'; //Engine Block of the car (optional) (default to undefined)
let cylinders: number; //Number of cylinders in the vehicle (optional) (default to undefined)
let doors: number; //Number of doors in the vehicle (optional) (default to undefined)
let highwayMpg: number; //Highway mileage (optional) (default to undefined)
let cityMpg: number; //City mileage of the car (optional) (default to undefined)
let latitude: number; //Latitude component of the location (optional) (default to undefined)
let longitude: number; //Longitude component of the location (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let country: 'us' | 'ca'; //Country for which car price will be predicted (optional) (default to 'us')

const { status, data } = await apiInstance.predictCarPrice(
    carType,
    apiKey,
    vin,
    year,
    make,
    model,
    trim,
    isCertified,
    carfax1Owner,
    carfaxCleanTitle,
    baseExteriorColor,
    baseInteriorColor,
    transmission,
    drivetrain,
    engineSize,
    engineBlock,
    cylinders,
    doors,
    highwayMpg,
    cityMpg,
    latitude,
    longitude,
    miles,
    zip,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carType** | [**&#39;used&#39; | &#39;new&#39;**]**Array<&#39;used&#39; &#124; &#39;new&#39;>** | Car condition | defaults to undefined|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vin** | [**string**] | Predict price for a VIN | (optional) defaults to undefined|
| **year** | [**number**] | Car manufacturing year | (optional) defaults to undefined|
| **make** | [**string**] | Car\&#39;s make | (optional) defaults to undefined|
| **model** | [**string**] | Car\&#39;s model | (optional) defaults to undefined|
| **trim** | [**string**] | Car\&#39;s trim | (optional) defaults to undefined|
| **isCertified** | [**boolean**] | Boolean to indicate car is certified or not | (optional) defaults to undefined|
| **carfax1Owner** | [**boolean**] | Boolean to indicate car is carfax one owner or not | (optional) defaults to undefined|
| **carfaxCleanTitle** | [**boolean**] | Boolean to indicate car has clean title or not | (optional) defaults to undefined|
| **baseExteriorColor** | [**string**] | Base exterior color of the car | (optional) defaults to undefined|
| **baseInteriorColor** | [**string**] | Base interior color of the car | (optional) defaults to undefined|
| **transmission** | [**&#39;Manual&#39; | &#39;Automatic&#39;**]**Array<&#39;Manual&#39; &#124; &#39;Automatic&#39;>** | Transmission on the car | (optional) defaults to undefined|
| **drivetrain** | [**&#39;4WD&#39; | &#39;AWD&#39; | &#39;FWD&#39; | &#39;RWD&#39;**]**Array<&#39;4WD&#39; &#124; &#39;AWD&#39; &#124; &#39;FWD&#39; &#124; &#39;RWD&#39;>** | Drivetrain on the car | (optional) defaults to undefined|
| **engineSize** | [**number**] | Engine Size of the car | (optional) defaults to undefined|
| **engineBlock** | [**&#39;I&#39; | &#39;V&#39; | &#39;H&#39;**]**Array<&#39;I&#39; &#124; &#39;V&#39; &#124; &#39;H&#39;>** | Engine Block of the car | (optional) defaults to undefined|
| **cylinders** | [**number**] | Number of cylinders in the vehicle | (optional) defaults to undefined|
| **doors** | [**number**] | Number of doors in the vehicle | (optional) defaults to undefined|
| **highwayMpg** | [**number**] | Highway mileage | (optional) defaults to undefined|
| **cityMpg** | [**number**] | City mileage of the car | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of the location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of the location | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **country** | [**&#39;us&#39; | &#39;ca&#39;**]**Array<&#39;us&#39; &#124; &#39;ca&#39;>** | Country for which car price will be predicted | (optional) defaults to 'us'|


### Return type

**PricePrediction**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Predicted price of the car along with it\&#39;s specifications |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUkFmv**
> FareValue predictCarUkFmv()

Predict fare value of car for UK based on YMMT & miles

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vrm: string; //Predict price for a VRM (optional) (default to undefined)
let year: number; //Car manufacturing year (optional) (default to undefined)
let make: string; //Car\'s make (optional) (default to undefined)
let model: string; //Car\'s model (optional) (default to undefined)
let variant: string; //Car\'s variant (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let postalCode: string; //Postal code of the car (optional) (default to undefined)
let radius: number; //Radius around the search location (Unit - Miles) (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUkFmv(
    apiKey,
    vrm,
    year,
    make,
    model,
    variant,
    miles,
    postalCode,
    radius
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vrm** | [**string**] | Predict price for a VRM | (optional) defaults to undefined|
| **year** | [**number**] | Car manufacturing year | (optional) defaults to undefined|
| **make** | [**string**] | Car\&#39;s make | (optional) defaults to undefined|
| **model** | [**string**] | Car\&#39;s model | (optional) defaults to undefined|
| **variant** | [**string**] | Car\&#39;s variant | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **postalCode** | [**string**] | Postal code of the car | (optional) defaults to undefined|
| **radius** | [**number**] | Radius around the search location (Unit - Miles) | (optional) defaults to undefined|


### Return type

**FareValue**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Predict fare value of car for UK based on YMMT &amp; miles |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUkMarketcheckPrice**
> predictCarUkMarketcheckPrice()

Predicts the retail dealer listing price for a used car in the UK market based on the car specifications, location, and condition

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vrm: string; //Predict price for a VRM (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let postalCode: string; //Postal code of the car (optional) (default to undefined)
let dealerType: 'independent' | 'franchise'; //Filter based on dealer type independant or franchise (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUkMarketcheckPrice(
    apiKey,
    vrm,
    miles,
    zip,
    postalCode,
    dealerType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vrm** | [**string**] | Predict price for a VRM | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **postalCode** | [**string**] | Postal code of the car | (optional) defaults to undefined|
| **dealerType** | [**&#39;independent&#39; | &#39;franchise&#39;**]**Array<&#39;independent&#39; &#124; &#39;franchise&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|


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
|**200** | Predicted MCP of the car along with it\&#39;s specifications |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUkMarketcheckPriceComparables**
> predictCarUkMarketcheckPriceComparables()

Predicts the retail dealer listing price for a used car in the UK market based on the car specifications, location, and condition. It also returns comparable cars in the market

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vrm: string; //Predict price for a VRM (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let postalCode: string; //Postal code of the car (optional) (default to undefined)
let dealerType: 'independent' | 'franchise'; //Filter based on dealer type independant or franchise (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUkMarketcheckPriceComparables(
    apiKey,
    vrm,
    miles,
    zip,
    postalCode,
    dealerType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vrm** | [**string**] | Predict price for a VRM | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **postalCode** | [**string**] | Postal code of the car | (optional) defaults to undefined|
| **dealerType** | [**&#39;independent&#39; | &#39;franchise&#39;**]**Array<&#39;independent&#39; &#124; &#39;franchise&#39;>** | Filter based on dealer type independant or franchise | (optional) defaults to undefined|


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
|**200** | Predicted MCP of the car along with set comparables |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUkPrice**
> PricePrediction predictCarUkPrice()

Predict car price for UK based on it\'s specifications

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vrm: string; //Predict price for a VRM (optional) (default to undefined)
let year: number; //Car manufacturing year (optional) (default to undefined)
let make: string; //Car\'s make (optional) (default to undefined)
let model: string; //Car\'s model (optional) (default to undefined)
let trim: string; //Car\'s trim (optional) (default to undefined)
let baseExteriorColor: string; //Base exterior color of the car (optional) (default to undefined)
let transmission: 'Manual' | 'Automatic'; //Transmission on the car (optional) (default to undefined)
let drivetrain: string; //Drivetrain on the car (optional) (default to undefined)
let engineSize: number; //Engine Size of the car (optional) (default to undefined)
let cylinders: number; //Number of cylinders in the vehicle (optional) (default to undefined)
let doors: number; //Number of doors in the vehicle (optional) (default to undefined)
let fuelType: string; //Fuel type of the car (optional) (default to undefined)
let highwayMpg: number; //Highway mileage (optional) (default to undefined)
let cityMpg: number; //City mileage of the car (optional) (default to undefined)
let combinedMpg: number; //Combiined mileage of the car (optional) (default to undefined)
let latitude: number; //Latitude component of the location (optional) (default to undefined)
let longitude: number; //Longitude component of the location (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUkPrice(
    apiKey,
    vrm,
    year,
    make,
    model,
    trim,
    baseExteriorColor,
    transmission,
    drivetrain,
    engineSize,
    cylinders,
    doors,
    fuelType,
    highwayMpg,
    cityMpg,
    combinedMpg,
    latitude,
    longitude,
    miles,
    zip
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vrm** | [**string**] | Predict price for a VRM | (optional) defaults to undefined|
| **year** | [**number**] | Car manufacturing year | (optional) defaults to undefined|
| **make** | [**string**] | Car\&#39;s make | (optional) defaults to undefined|
| **model** | [**string**] | Car\&#39;s model | (optional) defaults to undefined|
| **trim** | [**string**] | Car\&#39;s trim | (optional) defaults to undefined|
| **baseExteriorColor** | [**string**] | Base exterior color of the car | (optional) defaults to undefined|
| **transmission** | [**&#39;Manual&#39; | &#39;Automatic&#39;**]**Array<&#39;Manual&#39; &#124; &#39;Automatic&#39;>** | Transmission on the car | (optional) defaults to undefined|
| **drivetrain** | [**string**] | Drivetrain on the car | (optional) defaults to undefined|
| **engineSize** | [**number**] | Engine Size of the car | (optional) defaults to undefined|
| **cylinders** | [**number**] | Number of cylinders in the vehicle | (optional) defaults to undefined|
| **doors** | [**number**] | Number of doors in the vehicle | (optional) defaults to undefined|
| **fuelType** | [**string**] | Fuel type of the car | (optional) defaults to undefined|
| **highwayMpg** | [**number**] | Highway mileage | (optional) defaults to undefined|
| **cityMpg** | [**number**] | City mileage of the car | (optional) defaults to undefined|
| **combinedMpg** | [**number**] | Combiined mileage of the car | (optional) defaults to undefined|
| **latitude** | [**number**] | Latitude component of the location | (optional) defaults to undefined|
| **longitude** | [**number**] | Longitude component of the location | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|


### Return type

**PricePrediction**

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint), [oauth2](../README.md#oauth2), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Predicted price of the car along with it\&#39;s specifications |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUsMarketcheckPrice**
> predictCarUsMarketcheckPrice()

Predict Marketcheck car price along with MSRP

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vin: string; //Predict price for a VIN (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let city: string; //City of car (optional) (default to undefined)
let state: string; //State of car (optional) (default to undefined)
let dealerType: string; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let isCertified: boolean; //Boolean to indicate car is certified or not (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUsMarketcheckPrice(
    apiKey,
    vin,
    miles,
    zip,
    city,
    state,
    dealerType,
    isCertified
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vin** | [**string**] | Predict price for a VIN | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **city** | [**string**] | City of car | (optional) defaults to undefined|
| **state** | [**string**] | State of car | (optional) defaults to undefined|
| **dealerType** | [**string**] | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **isCertified** | [**boolean**] | Boolean to indicate car is certified or not | (optional) defaults to undefined|


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
|**200** | Predicted price of the car along with it\&#39;s specifications |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUsMarketcheckPriceComparables**
> predictCarUsMarketcheckPriceComparables()

Predict Marketcheck car price, MSRP along with active set comparables

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vin: string; //Predict price for a VIN (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let city: string; //City of car (optional) (default to undefined)
let state: string; //State of car (optional) (default to undefined)
let dealerType: string; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let isCertified: boolean; //Boolean to indicate car is certified or not (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUsMarketcheckPriceComparables(
    apiKey,
    vin,
    miles,
    zip,
    city,
    state,
    dealerType,
    isCertified
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vin** | [**string**] | Predict price for a VIN | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **city** | [**string**] | City of car | (optional) defaults to undefined|
| **state** | [**string**] | State of car | (optional) defaults to undefined|
| **dealerType** | [**string**] | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **isCertified** | [**boolean**] | Boolean to indicate car is certified or not | (optional) defaults to undefined|


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
|**200** | Predicted price of the car along with active set comparables |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictCarUsMarketcheckPriceComparablesDecode**
> predictCarUsMarketcheckPriceComparablesDecode()

Predict Marketcheck car price, MSRP along with active set comparables including NeoVIN decode info

### Example

```typescript
import {
    CarsMarketAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsMarketAPIApi(configuration);

let apiKey: string; //The API Authentication Key. Mandatory with all API calls. (optional) (default to undefined)
let vin: string; //Predict price for a VIN (optional) (default to undefined)
let miles: number; //miles vehicle has driven in total (optional) (default to undefined)
let zip: string; //Location zip (optional) (default to undefined)
let city: string; //City of car (optional) (default to undefined)
let state: string; //State of car (optional) (default to undefined)
let dealerType: string; //Filter based on dealer type independant or franchise (optional) (default to undefined)
let isCertified: boolean; //Boolean to indicate car is certified or not (optional) (default to undefined)

const { status, data } = await apiInstance.predictCarUsMarketcheckPriceComparablesDecode(
    apiKey,
    vin,
    miles,
    zip,
    city,
    state,
    dealerType,
    isCertified
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKey** | [**string**] | The API Authentication Key. Mandatory with all API calls. | (optional) defaults to undefined|
| **vin** | [**string**] | Predict price for a VIN | (optional) defaults to undefined|
| **miles** | [**number**] | miles vehicle has driven in total | (optional) defaults to undefined|
| **zip** | [**string**] | Location zip | (optional) defaults to undefined|
| **city** | [**string**] | City of car | (optional) defaults to undefined|
| **state** | [**string**] | State of car | (optional) defaults to undefined|
| **dealerType** | [**string**] | Filter based on dealer type independant or franchise | (optional) defaults to undefined|
| **isCertified** | [**boolean**] | Boolean to indicate car is certified or not | (optional) defaults to undefined|


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
|**200** | Predicted price of the car MSRP along with active set comparables including NeoVIN decode info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

