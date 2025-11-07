# MotorcycleListing

Represents a full list of attributes available with Marketcheck for a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier representing a specific listing from the Marketcheck database | [optional] [default to undefined]
**vin** | **string** | VIN for the Motorcycle | [optional] [default to undefined]
**heading** | **string** | Listing title as displayed on the source website | [optional] [default to undefined]
**price** | **number** | Asking price for the motorcycle | [optional] [default to undefined]
**miles** | **number** | Odometer reading / reported miles usage for the motorcycle | [optional] [default to undefined]
**msrp** | **number** | MSRP for the motorcycle | [optional] [default to undefined]
**dp_url** | **string** | Details Page url of the specific motorcycle | [optional] [default to undefined]
**color** | **string** | Color of the motorcycle | [optional] [default to undefined]
**seller_type** | **string** | Seller type for the motorcycle | [optional] [default to undefined]
**inventory_type** | **string** | Inventory type of motorcycle | [optional] [default to undefined]
**stock_no** | **string** | Stock number of motorcycle in dealers inventory | [optional] [default to undefined]
**last_seen_at** | **number** | Listing last seen at (most recent) timestamp | [optional] [default to undefined]
**last_seen_at_date** | **string** | Listing last seen at (most recent) date | [optional] [default to undefined]
**scraped_at** | **number** | Listing last seen at date timestamp | [optional] [default to undefined]
**scraped_at_date** | **string** | Listing last seen at date | [optional] [default to undefined]
**first_seen_at** | **number** | Listing first seen at first scraped timestamp | [optional] [default to undefined]
**first_seen_at_date** | **string** | Listing first seen at first scraped date | [optional] [default to undefined]
**source** | **string** | Source domain of the listing | [optional] [default to undefined]
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] [default to undefined]
**extra** | [**ListingNestExtraAttributes**](ListingNestExtraAttributes.md) |  | [optional] [default to undefined]
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] [default to undefined]
**build** | [**MotorcycleBuild**](MotorcycleBuild.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MotorcycleListing } from './api';

const instance: MotorcycleListing = {
    id,
    vin,
    heading,
    price,
    miles,
    msrp,
    dp_url,
    color,
    seller_type,
    inventory_type,
    stock_no,
    last_seen_at,
    last_seen_at_date,
    scraped_at,
    scraped_at_date,
    first_seen_at,
    first_seen_at_date,
    source,
    media,
    extra,
    dealer,
    build,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
