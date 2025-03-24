[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelAboutInfo

# Class: HotelAboutInfo

Defined in: main.ts:230914

## Implements

- [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HotelAboutInfo**(`data`?): `HotelAboutInfo`

Defined in: main.ts:230945

#### Parameters

##### data?

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

#### Returns

`HotelAboutInfo`

## Properties

### amenities?

> `optional` **amenities**: [`HotelAmenityInfo`](HotelAmenityInfo.md)[]

Defined in: main.ts:230938

hotel amenities
information about hotel amenities

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`amenities`](../interfaces/IHotelAboutInfo.md#amenities)

***

### check\_in\_time?

> `optional` **check\_in\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:230923

hotel check-in time
check-in time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_in_time`](../interfaces/IHotelAboutInfo.md#check_in_time)

***

### check\_out\_time?

> `optional` **check\_out\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:230926

hotel check-out time
check-out time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_out_time`](../interfaces/IHotelAboutInfo.md#check_out_time)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:230917

description of the hotel
the description of the hotel entity for which the results are collected

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`description`](../interfaces/IHotelAboutInfo.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:230932

hotel domain
domain of the hotel’s website

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`domain`](../interfaces/IHotelAboutInfo.md#domain)

***

### full\_address?

> `optional` **full\_address**: `string`

Defined in: main.ts:230929

full address of the hotel
address of the hotel indicated in the standardised format

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`full_address`](../interfaces/IHotelAboutInfo.md#full_address)

***

### popular\_amenities?

> `optional` **popular\_amenities**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

Defined in: main.ts:230941

hotel amenities
information about hotel amenities labelled as “popular”

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`popular_amenities`](../interfaces/IHotelAboutInfo.md#popular_amenities)

***

### sub\_descriptions?

> `optional` **sub\_descriptions**: `string`[]

Defined in: main.ts:230920

additional description of the hotel
details about the hotel provided in addition to the description

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`sub_descriptions`](../interfaces/IHotelAboutInfo.md#sub_descriptions)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:230935

hotel url
URL to the hotel’s website indicated in the listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`url`](../interfaces/IHotelAboutInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230954

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230991

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HotelAboutInfo`

Defined in: main.ts:230984

#### Parameters

##### data

`any`

#### Returns

`HotelAboutInfo`
