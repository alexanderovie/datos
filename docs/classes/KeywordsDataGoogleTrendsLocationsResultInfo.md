[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsLocationsResultInfo

# Class: KeywordsDataGoogleTrendsLocationsResultInfo

Defined in: main.ts:144404

## Implements

- [`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataGoogleTrendsLocationsResultInfo**(`data`?): `KeywordsDataGoogleTrendsLocationsResultInfo`

Defined in: main.ts:144432

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Returns

`KeywordsDataGoogleTrendsLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:144419

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#country_iso_code)

***

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:144428

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:144425

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:144406

location code

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:144417

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:144408

full name of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:144422

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:144441

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:144464

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataGoogleTrendsLocationsResultInfo`

Defined in: main.ts:144457

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataGoogleTrendsLocationsResultInfo`
