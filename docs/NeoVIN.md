# NeoVIN

Describes the NeoVIN specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vin** | **string** | 17 char long VIN of the vehicle | [optional] [default to undefined]
**squish_vin** | **string** | Vin prefix identification used in the decoding of the vehicle | [optional] [default to undefined]
**year** | **number** | Model Year of the vehicle | [optional] [default to undefined]
**make** | **string** | Make of the vehicle | [optional] [default to undefined]
**model** | **string** | Model of the vehicle | [optional] [default to undefined]
**listing_confidence** | **string** | Identification of primary source data used for trim and installed colors and options | [optional] [default to undefined]
**trim** | **string** | Trim of the vehicle | [optional] [default to undefined]
**trim_confidence** | **string** | Identification of confidence related to the selection of the trim | [optional] [default to undefined]
**version** | **string** | Version Name of the vehicle | [optional] [default to undefined]
**version_confidence** | **string** | Identification of confidence related to the selection of the vehicle version | [optional] [default to undefined]
**transmission** | **string** | Identified installed Transmission of the vehicle | [optional] [default to undefined]
**transmission_confidence** | **string** | Identification of confidence related to the selection of the installed transmission | [optional] [default to undefined]
**transmission_description** | **string** | The description of the installed transmission | [optional] [default to undefined]
**drivetrain** | **string** | Identified drivetrain of the vehicle | [optional] [default to undefined]
**engine** | **string** | Base identification of the number of cylinders and configuration of the installed engine on the vehicle | [optional] [default to undefined]
**fuel_type** | **string** | Identified Fuel type of the vehicle | [optional] [default to undefined]
**doors** | **number** | Number of doors on the vehicle | [optional] [default to undefined]
**body_type** | **string** | Body type of the vehicle | [optional] [default to undefined]
**body_subtype** | **string** | Body subtype (cab) of the vehicle | [optional] [default to undefined]
**weight** | **number** | Gross vehicle weight (lbs) | [optional] [default to undefined]
**width** | **number** | Overall width of the vehicle (in) | [optional] [default to undefined]
**height** | **number** | Overall height of the vehicle (in) | [optional] [default to undefined]
**length** | **number** | Overall length of the vehicle (in) | [optional] [default to undefined]
**city_mpg** | **number** | City miles per gallon | [optional] [default to undefined]
**highway_mpg** | **number** | Highway miles per gallon | [optional] [default to undefined]
**seating_capacity** | **number** | Identified seating capacity of the vehicle | [optional] [default to undefined]
**manufacturer_code** | **string** | Manufacturer code of the vehicle | [optional] [default to undefined]
**package_code** | **string** | Extracted manufacturer package code related to selection of the vehicle version (where available / applicable) | [optional] [default to undefined]
**package_description** | **string** | Extracted manufacturer package code description (where available / applicable) | [optional] [default to undefined]
**msrp** | **number** | Base MSRP as defined for the defined version of that vehicle with no options installed | [optional] [default to undefined]
**delivery_charges** | **number** | Manufacturer defined delivery charges | [optional] [default to undefined]
**installed_options_msrp** | **number** | Calculated combination of the MSRP for the installed options and packages | [optional] [default to undefined]
**combined_msrp** | **number** | Calculated combination of base MSRP with the delivery charges and the installed options MSRP | [optional] [default to undefined]
**interior_color** | **object** | The manufacturer defined option code and name for the interior color of the vehicle | [optional] [default to undefined]
**exterior_color** | **object** | The manufacturer defined option code and name for the exterior color of the vehicle | [optional] [default to undefined]
**options_packages** | **string** | Option and package codes installed on the vehicle | [optional] [default to undefined]
**installed_options_details** | **object** | Listing of all options and packages with detailed equipment identified that have been identified as installed on the vehicle | [optional] [default to undefined]
**features** | **object** | Normalized feature set of equipment identified that have been identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option | [optional] [default to undefined]
**installed_equipment** | **object** | Detailed equipment identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option | [optional] [default to undefined]
**available_options_details** | **object** | Listing of all options and packages with detailed equipment identified that could have been installed on the vehicle | [optional] [default to undefined]
**created_at** | **number** | vin first decoded at timestamp | [optional] [default to undefined]
**created_at_date** | **string** | vin first decoded at date | [optional] [default to undefined]
**updated_at** | **number** | vin last decoded at timestamp | [optional] [default to undefined]
**updated_at_date** | **string** | vin last decoded at date | [optional] [default to undefined]
**decode_version** | **number** | This will represent if previous vin decode values are updated | [optional] [default to undefined]

## Example

```typescript
import { NeoVIN } from './api';

const instance: NeoVIN = {
    vin,
    squish_vin,
    year,
    make,
    model,
    listing_confidence,
    trim,
    trim_confidence,
    version,
    version_confidence,
    transmission,
    transmission_confidence,
    transmission_description,
    drivetrain,
    engine,
    fuel_type,
    doors,
    body_type,
    body_subtype,
    weight,
    width,
    height,
    length,
    city_mpg,
    highway_mpg,
    seating_capacity,
    manufacturer_code,
    package_code,
    package_description,
    msrp,
    delivery_charges,
    installed_options_msrp,
    combined_msrp,
    interior_color,
    exterior_color,
    options_packages,
    installed_options_details,
    features,
    installed_equipment,
    available_options_details,
    created_at,
    created_at_date,
    updated_at,
    updated_at_date,
    decode_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
