[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsResultInfo

Defined in: main.ts:147254

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataDataforseoTrendsLocationsResultInfo**(`data`?): `KeywordsDataDataforseoTrendsLocationsResultInfo`

Defined in: main.ts:147282

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Returns

`KeywordsDataDataforseoTrendsLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:147269

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#country_iso_code)

***

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:147278

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:147275

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147256

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:147267

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147258

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:147272

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147291

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147314

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataDataforseoTrendsLocationsResultInfo`

Defined in: main.ts:147307

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataDataforseoTrendsLocationsResultInfo`
