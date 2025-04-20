[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeLocationsResultInfo

# Class: SerpYoutubeLocationsResultInfo

Defined in: main.ts:71903

## Implements

- [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeLocationsResultInfo**(`data?`): `SerpYoutubeLocationsResultInfo`

Defined in: main.ts:71924

#### Parameters

##### data?

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

#### Returns

`SerpYoutubeLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:71918

ISO country code of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:71905

location code

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:71916

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:71907

full name of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:71920

location type

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:71933

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:71954

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeLocationsResultInfo`

Defined in: main.ts:71947

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeLocationsResultInfo`
