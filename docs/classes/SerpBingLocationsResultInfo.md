[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocationsResultInfo

# Class: SerpBingLocationsResultInfo

Defined in: main.ts:65651

## Implements

- [`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingLocationsResultInfo**(`data`?): `SerpBingLocationsResultInfo`

Defined in: main.ts:65672

#### Parameters

##### data?

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md)

#### Returns

`SerpBingLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:65666

ISO country code of the location

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpBingLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:65653

location code

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_code`](../interfaces/ISerpBingLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:65664

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpBingLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:65655

full name of the location

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_name`](../interfaces/ISerpBingLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:65668

location type

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_type`](../interfaces/ISerpBingLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65681

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:65702

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingLocationsResultInfo`

Defined in: main.ts:65695

#### Parameters

##### data

`any`

#### Returns

`SerpBingLocationsResultInfo`
