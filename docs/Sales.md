# Sales

Sales count query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | **number** | Sales count | [optional] [default to undefined]
**cpo** | **number** | cpo sales count | [optional] [default to undefined]
**non_cpo** | **number** | Non-cpo sales count | [optional] [default to undefined]
**inventory_type** | **string** | inventory_type | [optional] [default to undefined]
**make** | **string** | Make | [optional] [default to undefined]
**model** | **string** | model | [optional] [default to undefined]
**year** | **string** | year | [optional] [default to undefined]
**trim** | **string** | trim | [optional] [default to undefined]
**taxonomy_vin** | **string** | taxonomy_vin | [optional] [default to undefined]
**state** | **string** | State | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**dom_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]
**price_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]
**miles_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Sales } from './api';

const instance: Sales = {
    counts,
    cpo,
    non_cpo,
    inventory_type,
    make,
    model,
    year,
    trim,
    taxonomy_vin,
    state,
    city,
    dom_stats,
    price_stats,
    miles_stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
