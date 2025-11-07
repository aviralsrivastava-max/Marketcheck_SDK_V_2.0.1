# BaseListing

Minimal set of attributes describing a listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier representing a specific listing from the Marketcheck database | [optional] [default to undefined]
**vin** | **string** | VIN for the car | [optional] [default to undefined]
**heading** | **string** | Listing title as displayed on the source website | [optional] [default to undefined]
**price** | **number** | Asking price for the car | [optional] [default to undefined]
**miles** | **number** | Odometer reading / reported miles usage for the car | [optional] [default to undefined]
**msrp** | **number** | MSRP for the car | [optional] [default to undefined]
**data_source** | **string** | Data source of the listing | [optional] [default to undefined]
**is_certified** | **number** | Certified car | [optional] [default to undefined]
**vdp_url** | **string** | Vehicle Details Page url of the specific car | [optional] [default to undefined]
**carfax_1_owner** | **boolean** | Flag to indicate whether listing is carfax_1_owner | [optional] [default to undefined]
**carfax_clean_title** | **boolean** | Flag to indicate whether listing is carfax_clean_title | [optional] [default to undefined]
**exterior_color** | **string** | Exterior color of the car | [optional] [default to undefined]
**interior_color** | **string** | Interior color of the car | [optional] [default to undefined]
**base_ext_color** | **string** | Base exterior color of the car | [optional] [default to undefined]
**base_int_color** | **string** | Base interior color of the car | [optional] [default to undefined]
**dom** | **number** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] [default to undefined]
**dom_180** | **number** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] [default to undefined]
**dom_active** | **number** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] [default to undefined]
**seller_type** | **string** | Seller type for the car | [optional] [default to undefined]
**inventory_type** | **string** | Inventory type of car | [optional] [default to undefined]
**stock_no** | **string** | Stock number of car in dealers inventory | [optional] [default to undefined]
**last_seen_at** | **number** | Listing last seen at (most recent) timestamp | [optional] [default to undefined]
**last_seen_at_date** | **string** | Listing last seen at (most recent) date | [optional] [default to undefined]
**scraped_at** | **number** | Listing last seen at date timestamp | [optional] [default to undefined]
**scraped_at_date** | **string** | Listing last seen at date | [optional] [default to undefined]
**first_seen_at** | **number** | Listing first seen at first scraped timestamp | [optional] [default to undefined]
**first_seen_at_date** | **string** | Listing first seen at first scraped date | [optional] [default to undefined]
**ref_price** | **string** | Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date | [optional] [default to undefined]
**ref_price_dt** | **number** | The date at which the last price was reported online. This is earlier to last_seen_date | [optional] [default to undefined]
**price_change_percent** | **number** | Percentage difference between the cars\&#39;s current price and ref_price i.e. last reported price | [optional] [default to undefined]
**ref_miles** | **string** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] [default to undefined]
**ref_miles_dt** | **number** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] [default to undefined]
**source** | **string** | Source domain of the listing | [optional] [default to undefined]
**model_code** | **string** | model_code of the listing | [optional] [default to undefined]
**in_transit** | **boolean** | in_transit of the listing | [optional] [default to undefined]
**is_translated** | **boolean** | is_translated of the listing | [optional] [default to undefined]
**title_type** | **string** | title_type of the listing | [optional] [default to undefined]
**financing_options** | [**Array&lt;ListingFinance&gt;**](ListingFinance.md) | Array of all finance offers for this listing | [optional] [default to undefined]
**leasing_options** | [**Array&lt;ListingLease&gt;**](ListingLease.md) | Array of all finance offers for this listing | [optional] [default to undefined]
**media** | [**ListingNestMedia**](ListingNestMedia.md) |  | [optional] [default to undefined]
**dealer** | [**NestDealer**](NestDealer.md) |  | [optional] [default to undefined]
**mc_dealership** | [**Dealership**](Dealership.md) |  | [optional] [default to undefined]
**build** | [**Build**](Build.md) |  | [optional] [default to undefined]
**dist** | **number** | Distance of the car\&#39;s location from the specified user lcoation | [optional] [default to undefined]
**dos_active** | **number** | Days on Site value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] [default to undefined]

## Example

```typescript
import { BaseListing } from './api';

const instance: BaseListing = {
    id,
    vin,
    heading,
    price,
    miles,
    msrp,
    data_source,
    is_certified,
    vdp_url,
    carfax_1_owner,
    carfax_clean_title,
    exterior_color,
    interior_color,
    base_ext_color,
    base_int_color,
    dom,
    dom_180,
    dom_active,
    seller_type,
    inventory_type,
    stock_no,
    last_seen_at,
    last_seen_at_date,
    scraped_at,
    scraped_at_date,
    first_seen_at,
    first_seen_at_date,
    ref_price,
    ref_price_dt,
    price_change_percent,
    ref_miles,
    ref_miles_dt,
    source,
    model_code,
    in_transit,
    is_translated,
    title_type,
    financing_options,
    leasing_options,
    media,
    dealer,
    mc_dealership,
    build,
    dist,
    dos_active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
