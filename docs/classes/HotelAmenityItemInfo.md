[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelAmenityItemInfo

# Class: HotelAmenityItemInfo

Defined in: main.ts:231300

## Implements

- [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HotelAmenityItemInfo**(`data?`): `HotelAmenityItemInfo`

Defined in: main.ts:231314

#### Parameters

##### data?

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

#### Returns

`HotelAmenityItemInfo`

## Properties

### amenity?

> `optional` **amenity**: `string`

Defined in: main.ts:231302

standardised amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity`](../interfaces/IHotelAmenityItemInfo.md#amenity)

***

### amenity\_label?

> `optional` **amenity\_label**: `string`

Defined in: main.ts:231304

displayed amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity_label`](../interfaces/IHotelAmenityItemInfo.md#amenity_label)

***

### hint?

> `optional` **hint**: `string`

Defined in: main.ts:231306

standardised details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint`](../interfaces/IHotelAmenityItemInfo.md#hint)

***

### hint\_label?

> `optional` **hint\_label**: `string`

Defined in: main.ts:231308

displayed details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint_label`](../interfaces/IHotelAmenityItemInfo.md#hint_label)

***

### is\_available?

> `optional` **is\_available**: `boolean`

Defined in: main.ts:231310

indicates whether the amenity is available in the hotel

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`is_available`](../interfaces/IHotelAmenityItemInfo.md#is_available)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:231323

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:231344

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HotelAmenityItemInfo`

Defined in: main.ts:231337

#### Parameters

##### data

`any`

#### Returns

`HotelAmenityItemInfo`
