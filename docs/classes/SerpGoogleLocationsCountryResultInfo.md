[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocationsCountryResultInfo

# Class: SerpGoogleLocationsCountryResultInfo

Defined in: main.ts:28350

## Implements

- [`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocationsCountryResultInfo()

> **new SerpGoogleLocationsCountryResultInfo**(`data`?): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:28371

#### Parameters

##### data?

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md)

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:28365

ISO country code of the location

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:28352

location code

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:28363

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:28354

full name of the location

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:28367

location type

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28380

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:28401

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:28394

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)
