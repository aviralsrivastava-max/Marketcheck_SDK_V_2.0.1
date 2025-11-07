# Dealer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique id associated with the dealer in the Marketcheck database | [optional] [default to undefined]
**seller_name** | **string** | Name of the dealer | [optional] [default to undefined]
**inventory_url** | **string** | Website of the dealer | [optional] [default to undefined]
**data_source** | **string** | Datasource of the dealer | [optional] [default to undefined]
**status** | **string** | Status of the dealer | [optional] [default to undefined]
**listing_count** | **number** | Listing count of the dealer | [optional] [default to undefined]
**dealer_type** | **string** | Type of dealer (franchise/independent) | [optional] [default to undefined]
**dealership_group_name** | **string** | Dealership group name of dealer | [optional] [default to undefined]
**street** | **string** | Street of the dealer | [optional] [default to undefined]
**city** | **string** | City of the dealer | [optional] [default to undefined]
**state** | **string** | State of the dealer | [optional] [default to undefined]
**country** | **string** | country of the dealer | [optional] [default to undefined]
**zip** | **string** | Zip of the dealer | [optional] [default to undefined]
**latitude** | **string** | Latutide for the dealer location | [optional] [default to undefined]
**longitude** | **string** | Longitude for the dealer location | [optional] [default to undefined]
**location_ll** | **string** | location_ll for the dealer location | [optional] [default to undefined]
**seller_phone** | **string** | Contact no of the dealer | [optional] [default to undefined]
**seller_email** | **string** | Contact email of the dealer | [optional] [default to undefined]
**created_at** | **string** | Dealer creation date | [optional] [default to undefined]
**distance** | **number** | Distance of dealer from given location | [optional] [default to undefined]

## Example

```typescript
import { Dealer } from './api';

const instance: Dealer = {
    id,
    seller_name,
    inventory_url,
    data_source,
    status,
    listing_count,
    dealer_type,
    dealership_group_name,
    street,
    city,
    state,
    country,
    zip,
    latitude,
    longitude,
    location_ll,
    seller_phone,
    seller_email,
    created_at,
    distance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
