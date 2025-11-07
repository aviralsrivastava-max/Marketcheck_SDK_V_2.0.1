# BasePopular

Single popular car in array

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventoryType** | **string** | Inventory type | [optional] [default to undefined]
**counts** | **string** | Number of sold listings of this model | [optional] [default to undefined]
**model** | **string** | Model name | [optional] [default to undefined]
**make** | **string** | Make name | [optional] [default to undefined]
**state** | **string** | State | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**dom_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]
**price_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]
**miles_stats** | [**SalesStats**](SalesStats.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BasePopular } from './api';

const instance: BasePopular = {
    inventoryType,
    counts,
    model,
    make,
    state,
    city,
    dom_stats,
    price_stats,
    miles_stats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
