# DealerRating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the dealer | [optional] [default to undefined]
**street** | **string** | Street of the dealer | [optional] [default to undefined]
**city** | **string** | City of the dealer | [optional] [default to undefined]
**state** | **string** | State of the dealer | [optional] [default to undefined]
**zip** | **string** | Zip of the dealer | [optional] [default to undefined]
**latitude** | **string** | Latutide for the dealer location | [optional] [default to undefined]
**longitude** | **string** | Longitude for the dealer location | [optional] [default to undefined]
**overall_rating** | **number** | Overall rating of the dealership on scale 1-5 | [optional] [default to undefined]
**rating_components** | [**Array&lt;RatingComponents&gt;**](RatingComponents.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DealerRating } from './api';

const instance: DealerRating = {
    name,
    street,
    city,
    state,
    zip,
    latitude,
    longitude,
    overall_rating,
    rating_components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
