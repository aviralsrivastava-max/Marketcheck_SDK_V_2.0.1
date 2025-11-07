# RangeFacetItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**Array&lt;RangeFacetItemCountsInner&gt;**](RangeFacetItemCountsInner.md) |  | [optional] [default to undefined]
**gap** | **number** | The range gap applied for range faceting | [optional] [default to undefined]
**start** | **number** | The start of range | [optional] [default to undefined]
**end** | **number** | The end of range | [optional] [default to undefined]
**before** | **number** | Number of listings that have field value before range start | [optional] [default to undefined]
**after** | **number** | Number of listings that have field value after range end | [optional] [default to undefined]
**between** | **number** | Number of listings that have field value between range start and range end | [optional] [default to undefined]

## Example

```typescript
import { RangeFacetItem } from './api';

const instance: RangeFacetItem = {
    counts,
    gap,
    start,
    end,
    before,
    after,
    between,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
