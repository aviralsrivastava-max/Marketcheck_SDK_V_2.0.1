# HistoricalListing

Represents a car history entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier representing a specific listing from the Marketcheck database | [optional] [default to undefined]
**heading** | **string** | Listing title as displayed on the source website | [optional] [default to undefined]
**vin** | **string** | VIN for the car | [optional] [default to undefined]
**price** | **number** | Asking price for the car | [optional] [default to undefined]
**miles** | **number** | Odometer reading / reported miles usage for the car | [optional] [default to undefined]
**msrp** | **number** | MSRP for the car | [optional] [default to undefined]
**data_source** | **string** | Data source of the listing | [optional] [default to undefined]
**is_certified** | **number** | Certified car | [optional] [default to undefined]
**is_searchable** | **string** | Flag to indicate listing is marked searchable or not | [optional] [default to undefined]
**vdp_url** | **string** | Vehicle Details Page url of the specific car | [optional] [default to undefined]
**carfax_1_owner** | **boolean** | Flag to indicate whether listing is carfax_1_owner | [optional] [default to undefined]
**carfax_clean_title** | **boolean** | Flag to indicate whether listing is carfax_clean_title | [optional] [default to undefined]
**exterior_color** | **string** | Exterior color of the car | [optional] [default to undefined]
**interior_color** | **string** | Interior color of the car | [optional] [default to undefined]
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
**ref_miles** | **string** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] [default to undefined]
**ref_miles_dt** | **number** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] [default to undefined]
**source** | **string** | Source domain of the listing | [optional] [default to undefined]
**financing_options** | [**Array&lt;ListingFinance&gt;**](ListingFinance.md) | Array of all finance offers for this listing | [optional] [default to undefined]
**leasing_options** | [**Array&lt;ListingLease&gt;**](ListingLease.md) | Array of all finance offers for this listing | [optional] [default to undefined]
**trim_r** | **string** | Trim of the car | [optional] [default to undefined]
**seller_name** | **string** | Seller name of the listing from the Marketcheck database | [optional] [default to undefined]
**seller_name_o** | **string** | Seller name of the listing from the Marketcheck database | [optional] [default to undefined]
**street** | **string** | Street of the listing | [optional] [default to undefined]
**city** | **string** | City of the listing | [optional] [default to undefined]
**state** | **string** | State of the listing | [optional] [default to undefined]
**zip** | **string** | Zip of the listing | [optional] [default to undefined]
**latitude** | **string** | Latitude of the listing | [optional] [default to undefined]
**longitude** | **string** | Longitude of the listing | [optional] [default to undefined]
**dealer_id** | **number** | Unique MC assigned dealers id for the listing | [optional] [default to undefined]
**status_date** | **number** | Timestamp of status date | [optional] [default to undefined]
**dos_active** | **number** | Days on Site value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] [default to undefined]

## Example

```typescript
import { HistoricalListing } from './api';

const instance: HistoricalListing = {
    id,
    heading,
    vin,
    price,
    miles,
    msrp,
    data_source,
    is_certified,
    is_searchable,
    vdp_url,
    carfax_1_owner,
    carfax_clean_title,
    exterior_color,
    interior_color,
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
    ref_miles,
    ref_miles_dt,
    source,
    financing_options,
    leasing_options,
    trim_r,
    seller_name,
    seller_name_o,
    street,
    city,
    state,
    zip,
    latitude,
    longitude,
    dealer_id,
    status_date,
    dos_active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
