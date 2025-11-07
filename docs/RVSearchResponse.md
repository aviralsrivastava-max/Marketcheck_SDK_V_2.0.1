# RVSearchResponse

RV search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_found** | **number** | The number of listings found | [optional] [default to undefined]
**listings** | [**Array&lt;RVBaseListing&gt;**](RVBaseListing.md) |  | [optional] [default to undefined]
**facets** | [**Array&lt;RVSearchFacets&gt;**](RVSearchFacets.md) |  | [optional] [default to undefined]
**stats** | [**Array&lt;MotorcycleSearchStats&gt;**](MotorcycleSearchStats.md) |  | [optional] [default to undefined]
**range_facets** | [**Array&lt;MotorcycleSearchRangeFacets&gt;**](MotorcycleSearchRangeFacets.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RVSearchResponse } from './api';

const instance: RVSearchResponse = {
    num_found,
    listings,
    facets,
    stats,
    range_facets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
