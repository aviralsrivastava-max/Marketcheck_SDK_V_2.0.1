# FareValue

Fare value of a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fmv_national** | **number** | Fare value calculated for all available listing | [optional] [default to undefined]
**fmv_local** | **number** | Fare value calculated for all available listing around given postal code &amp; radius | [optional] [default to undefined]
**avg_days_to_sold_national** | **number** | Average days to sold of car for all available listings | [optional] [default to undefined]
**avg_days_to_sold_local** | **number** | Average days to sold of car around given postal code &amp; radius | [optional] [default to undefined]

## Example

```typescript
import { FareValue } from './api';

const instance: FareValue = {
    fmv_national,
    fmv_local,
    avg_days_to_sold_national,
    avg_days_to_sold_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
