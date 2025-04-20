[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailableLocations

# Class: AvailableLocations

Defined in: main.ts:156234

## Implements

- [`IAvailableLocations`](../interfaces/IAvailableLocations.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AvailableLocations**(`data?`): `AvailableLocations`

Defined in: main.ts:156248

#### Parameters

##### data?

[`IAvailableLocations`](../interfaces/IAvailableLocations.md)

#### Returns

`AvailableLocations`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:156240

ISO country code of the location

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`country_iso_code`](../interfaces/IAvailableLocations.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:156236

location code

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_code`](../interfaces/IAvailableLocations.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:156238

location name

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_name`](../interfaces/IAvailableLocations.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:156244

location type
possible values:
Country, Region

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_type`](../interfaces/IAvailableLocations.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:156257

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:156277

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AvailableLocations`

Defined in: main.ts:156270

#### Parameters

##### data

`any`

#### Returns

`AvailableLocations`
