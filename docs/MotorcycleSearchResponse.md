# MotorcycleSearchResponse

Motorcycle search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_found** | **number** | The number of listings found | [optional] [default to undefined]
**listings** | [**Array&lt;MotorcycleBaseListing&gt;**](MotorcycleBaseListing.md) |  | [optional] [default to undefined]
**facets** | [**Array&lt;MotorcycleSearchFacets&gt;**](MotorcycleSearchFacets.md) |  | [optional] [default to undefined]
**stats** | [**Array&lt;MotorcycleSearchStats&gt;**](MotorcycleSearchStats.md) |  | [optional] [default to undefined]
**range_facets** | [**Array&lt;MotorcycleSearchRangeFacets&gt;**](MotorcycleSearchRangeFacets.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MotorcycleSearchResponse } from './api';

const instance: MotorcycleSearchResponse = {
    num_found,
    listings,
    facets,
    stats,
    range_facets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
