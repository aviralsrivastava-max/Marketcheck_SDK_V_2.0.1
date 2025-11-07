# UKSearchResponse

Search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_found** | **number** | The number of listings found | [optional] [default to undefined]
**listings** | [**Array&lt;UKBaseListing&gt;**](UKBaseListing.md) |  | [optional] [default to undefined]
**facets** | [**UKCarSearchFacets**](UKCarSearchFacets.md) |  | [optional] [default to undefined]
**stats** | [**CarSearchStats**](CarSearchStats.md) |  | [optional] [default to undefined]
**range_facets** | [**CarSearchRangeFacets**](CarSearchRangeFacets.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UKSearchResponse } from './api';

const instance: UKSearchResponse = {
    num_found,
    listings,
    facets,
    stats,
    range_facets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
