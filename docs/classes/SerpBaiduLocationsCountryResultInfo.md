[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsCountryResultInfo

# Class: SerpBaiduLocationsCountryResultInfo

Defined in: main.ts:80979

## Implements

- [`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsCountryResultInfo()

> **new SerpBaiduLocationsCountryResultInfo**(`data`?): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

Defined in: main.ts:80996

#### Parameters

##### data?

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md)

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:80989

ISO country code of the location

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:80981

location code

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:80987

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:80983

full name of the location

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:80992

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:81005

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:81026

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

Defined in: main.ts:81019

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)
