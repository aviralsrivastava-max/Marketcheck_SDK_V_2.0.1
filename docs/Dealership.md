# Dealership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mc_website_id** | **string** | Marketcheck Website ID - Actually it is unique for each dealer\&#39;s website | [optional] [default to undefined]
**mc_dealer_id** | **string** | Marketcheck dealer id retained at dealership level | [optional] [default to undefined]
**mc_location_id** | **string** | Marketcheck location id retained at address level | [optional] [default to undefined]
**mc_rooftop_id** | **string** | Marketcheck Rooftop ID it is unique for each dealer\&#39;s name | [optional] [default to undefined]
**seller_name** | **string** | Name of the dealerhip | [optional] [default to undefined]
**inventory_url** | **string** | Website of the dealerhip | [optional] [default to undefined]
**data_source** | **string** | Datasource of the dealerhip | [optional] [default to undefined]
**status** | **string** | Status of the dealerhip | [optional] [default to undefined]
**mc_dealership_group_id** | **string** | When another dealership acquires a dealership or becomes part of a more prominent dealership, the Dealership Group ID field will be updated to reflect the name of the acquiring or larger dealership group. | [optional] [default to undefined]
**mc_dealership_group_name** | **string** | When another dealership acquires a dealership or becomes part of a more prominent dealership, the \&#39;Dealership Group Name\&#39; field will be updated to reflect the name of the acquiring or larger dealership group. | [optional] [default to undefined]
**mc_sub_dealership_group_id** | **string** | When another dealership acquires a dealership or becomes part of a more prominent dealership, the \&#39;Sub Dealership Group Name\&#39; field will be updated to reflect the name of the acquired or smaller dealership group. | [optional] [default to undefined]
**mc_sub_dealership_group_name** | **string** | When another dealership acquires a dealership or becomes part of a more prominent dealership, the \&#39;Sub Dealership Group Name\&#39; field will be updated to reflect the name of the acquired or smaller dealership group. | [optional] [default to undefined]
**mc_category** | **string** | Category of dealer like - Dealer/Dealership Group/Dealership Sub Group/Retailer/Aggregator | [optional] [default to undefined]
**dealer_type** | **string** | Type of dealerhip (franchise/independent) | [optional] [default to undefined]
**street** | **string** | Street of the dealerhip | [optional] [default to undefined]
**city** | **string** | City of the dealerhip | [optional] [default to undefined]
**state** | **string** | State of the dealerhip | [optional] [default to undefined]
**country** | **string** | country of the dealerhip | [optional] [default to undefined]
**zip** | **string** | Zip of the dealerhip | [optional] [default to undefined]
**latitude** | **string** | Latutide for the dealerhip location | [optional] [default to undefined]
**longitude** | **string** | Longitude for the dealerhip location | [optional] [default to undefined]
**location_ll** | **string** | location_ll for the dealerhip location | [optional] [default to undefined]
**seller_phone** | **string** | Contact no of the dealerhip | [optional] [default to undefined]
**seller_email** | **string** | Contact email of the dealerhip | [optional] [default to undefined]
**distance** | **number** | Distance of dealerhip from given location | [optional] [default to undefined]

## Example

```typescript
import { Dealership } from './api';

const instance: Dealership = {
    mc_website_id,
    mc_dealer_id,
    mc_location_id,
    mc_rooftop_id,
    seller_name,
    inventory_url,
    data_source,
    status,
    mc_dealership_group_id,
    mc_dealership_group_name,
    mc_sub_dealership_group_id,
    mc_sub_dealership_group_name,
    mc_category,
    dealer_type,
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
    distance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
