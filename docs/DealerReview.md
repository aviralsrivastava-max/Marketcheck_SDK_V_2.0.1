# DealerReview


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
**overall_reviews** | **number** | Overall reviews of the dealership | [optional] [default to undefined]
**review_components** | [**Array&lt;ReviewComponents&gt;**](ReviewComponents.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DealerReview } from './api';

const instance: DealerReview = {
    name,
    street,
    city,
    state,
    zip,
    latitude,
    longitude,
    overall_reviews,
    review_components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
