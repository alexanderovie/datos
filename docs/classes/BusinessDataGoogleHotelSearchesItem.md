[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesItem

# Class: BusinessDataGoogleHotelSearchesItem

Defined in: main.ts:229632

## Implements

- [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleHotelSearchesItem**(`data?`): `BusinessDataGoogleHotelSearchesItem`

Defined in: main.ts:229659

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

#### Returns

`BusinessDataGoogleHotelSearchesItem`

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:229638

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:229647

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`is_paid`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#is_paid)

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

Defined in: main.ts:229649

GPS coordinates of the hotel’s location

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`location`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#location)

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:229653

featured images for a hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#overview_images)

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:229655

hotel price

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`prices`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#prices)

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

Defined in: main.ts:229651

hotel reviews and rating information

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#reviews)

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:229643

hotel class rating
class rating that ranges between 1-5 stars

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#stars)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229640

title of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`title`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229634

type of element

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`type`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:229668

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:229697

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleHotelSearchesItem`

Defined in: main.ts:229690

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleHotelSearchesItem`
