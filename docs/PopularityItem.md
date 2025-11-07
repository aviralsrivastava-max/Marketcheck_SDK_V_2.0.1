# PopularityItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars | [optional] [default to undefined]
**left** | **number** | Left side rating for above description (2016 ford F-150 Lariat) | [optional] [default to undefined]
**right** | **number** | Right side rating for above description (All Other Cars) | [optional] [default to undefined]
**difference** | **number** | Difference depending upon left and right analysis | [optional] [default to undefined]
**thumbs** | **string** | Thumbs up/down depending upon left and right analysis numbers | [optional] [default to undefined]
**delta_percent** | **number** | Delta percent | [optional] [default to undefined]
**color** | **string** | Color depending upon left and right analysis numbers | [optional] [default to undefined]

## Example

```typescript
import { PopularityItem } from './api';

const instance: PopularityItem = {
    text,
    left,
    right,
    difference,
    thumbs,
    delta_percent,
    color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
