# Mds

Describes Market days supply results for year make model trim combination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mds** | **number** | Provides Market days supply count | [optional] [default to undefined]
**total_active_cars_for_ymmt** | **number** | Active cars for ymmt combination | [optional] [default to undefined]
**total_cars_sold_in_last_45_days** | **number** | Cars sold in last 45 days | [optional] [default to undefined]
**sold_vins** | **Array&lt;string&gt;** | Sold vins array | [optional] [default to undefined]
**year** | **number** | Year of vin provided | [optional] [default to undefined]
**make** | **string** | Make of vin provided | [optional] [default to undefined]
**model** | **string** | Model of vin provided | [optional] [default to undefined]
**trim** | **string** | Trim of vin provided | [optional] [default to undefined]

## Example

```typescript
import { Mds } from './api';

const instance: Mds = {
    mds,
    total_active_cars_for_ymmt,
    total_cars_sold_in_last_45_days,
    sold_vins,
    year,
    make,
    model,
    trim,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
