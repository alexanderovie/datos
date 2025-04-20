[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsCountryResultInfo

# Class: SerpYahooLocationsCountryResultInfo

Defined in: main.ts:77784

## Implements

- [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYahooLocationsCountryResultInfo**(`data?`): `SerpYahooLocationsCountryResultInfo`

Defined in: main.ts:77805

#### Parameters

##### data?

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

#### Returns

`SerpYahooLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:77799

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:77786

location code

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:77797

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:77788

full name of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:77801

location type

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:77814

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:77835

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYahooLocationsCountryResultInfo`

Defined in: main.ts:77828

#### Parameters

##### data

`any`

#### Returns

`SerpYahooLocationsCountryResultInfo`
