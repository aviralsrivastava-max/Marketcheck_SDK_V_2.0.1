# ListingVDP

Describes the VDP (Vehicle Details Page) HTML object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html** | **string** | The HTML string for the listing web page | [optional] [default to undefined]
**crawled_at** | **number** | The timestamp indicating the time when the VDP was cached | [optional] [default to undefined]
**vdp_url** | **string** | The URL of the VDP | [optional] [default to undefined]

## Example

```typescript
import { ListingVDP } from './api';

const instance: ListingVDP = {
    html,
    crawled_at,
    vdp_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
