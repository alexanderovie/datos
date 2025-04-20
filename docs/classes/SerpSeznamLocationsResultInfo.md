[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsResultInfo

# Class: SerpSeznamLocationsResultInfo

Defined in: main.ts:85162

## Implements

- [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpSeznamLocationsResultInfo**(`data?`): `SerpSeznamLocationsResultInfo`

Defined in: main.ts:85178

#### Parameters

##### data?

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

#### Returns

`SerpSeznamLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:85172

ISO country code of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:85164

location code

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:85170

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:85166

full name of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_name`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:85174

location type

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_type`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:85187

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:85208

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpSeznamLocationsResultInfo`

Defined in: main.ts:85201

#### Parameters

##### data

`any`

#### Returns

`SerpSeznamLocationsResultInfo`
