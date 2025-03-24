[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsCountryResultInfo

# Class: SerpSeznamLocationsCountryResultInfo

Defined in: main.ts:85238

## Implements

- [`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpSeznamLocationsCountryResultInfo**(`data`?): `SerpSeznamLocationsCountryResultInfo`

Defined in: main.ts:85254

#### Parameters

##### data?

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md)

#### Returns

`SerpSeznamLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:85248

ISO country code of the location

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:85240

location code

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:85246

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:85242

full name of the location

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:85250

location type

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:85263

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:85284

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpSeznamLocationsCountryResultInfo`

Defined in: main.ts:85277

#### Parameters

##### data

`any`

#### Returns

`SerpSeznamLocationsCountryResultInfo`
