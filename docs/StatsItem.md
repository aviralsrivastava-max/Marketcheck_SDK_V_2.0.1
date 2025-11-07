# StatsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min** | **number** | Minimum value of the field | [optional] [default to undefined]
**max** | **number** | Maximum value of the field | [optional] [default to undefined]
**count** | **number** | count | [optional] [default to undefined]
**missing** | **number** | count of listings missing particular field | [optional] [default to undefined]
**sum** | **number** | Summation of all values of the field | [optional] [default to undefined]
**mean** | **number** | Mean of the field | [optional] [default to undefined]
**stddev** | **number** | stddev of the field | [optional] [default to undefined]
**sum_of_squares** | **number** | sum_of_squares of the field | [optional] [default to undefined]
**median** | **number** | median of the field | [optional] [default to undefined]

## Example

```typescript
import { StatsItem } from './api';

const instance: StatsItem = {
    min,
    max,
    count,
    missing,
    sum,
    mean,
    stddev,
    sum_of_squares,
    median,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
