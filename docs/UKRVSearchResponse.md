# UKRVSearchResponse

RV search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_found** | **number** | The number of listings found | [optional] [default to undefined]
**listings** | [**Array&lt;UKRVBaseListing&gt;**](UKRVBaseListing.md) |  | [optional] [default to undefined]
**facets** | [**Array&lt;UKRVSearchFacets&gt;**](UKRVSearchFacets.md) |  | [optional] [default to undefined]
**stats** | [**Array&lt;MotorcycleSearchStats&gt;**](MotorcycleSearchStats.md) |  | [optional] [default to undefined]
**range_facets** | [**Array&lt;UKRVSearchRangeFacets&gt;**](UKRVSearchRangeFacets.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UKRVSearchResponse } from './api';

const instance: UKRVSearchResponse = {
    num_found,
    listings,
    facets,
    stats,
    range_facets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
