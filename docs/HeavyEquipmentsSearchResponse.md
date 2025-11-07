# HeavyEquipmentsSearchResponse

Heavy Equipments search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_found** | **number** | The number of listings found | [optional] [default to undefined]
**listings** | [**Array&lt;HeavyEquipmentsBaseListing&gt;**](HeavyEquipmentsBaseListing.md) |  | [optional] [default to undefined]
**facets** | [**Array&lt;HeavyEquipmentsSearchFacets&gt;**](HeavyEquipmentsSearchFacets.md) |  | [optional] [default to undefined]
**stats** | [**Array&lt;HeavyEquipmentsSearchStats&gt;**](HeavyEquipmentsSearchStats.md) |  | [optional] [default to undefined]
**range_facets** | [**Array&lt;HeavyEquipmentsSearchRangeFacets&gt;**](HeavyEquipmentsSearchRangeFacets.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HeavyEquipmentsSearchResponse } from './api';

const instance: HeavyEquipmentsSearchResponse = {
    num_found,
    listings,
    facets,
    stats,
    range_facets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
