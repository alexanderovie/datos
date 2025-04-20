[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelAmenityInfo

# Class: HotelAmenityInfo

Defined in: main.ts:231374

## Implements

- [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HotelAmenityInfo**(`data?`): `HotelAmenityInfo`

Defined in: main.ts:231384

#### Parameters

##### data?

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

#### Returns

`HotelAmenityInfo`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:231376

standardised category of the ammenity

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category`](../interfaces/IHotelAmenityInfo.md#category)

***

### category\_label?

> `optional` **category\_label**: `string`

Defined in: main.ts:231378

label of the category

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category_label`](../interfaces/IHotelAmenityInfo.md#category_label)

***

### items?

> `optional` **items**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

Defined in: main.ts:231380

specific amenities and details

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`items`](../interfaces/IHotelAmenityInfo.md#items)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:231393

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:231416

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HotelAmenityInfo`

Defined in: main.ts:231409

#### Parameters

##### data

`any`

#### Returns

`HotelAmenityInfo`
