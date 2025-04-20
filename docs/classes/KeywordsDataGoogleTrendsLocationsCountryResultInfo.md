[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsLocationsCountryResultInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryResultInfo

Defined in: main.ts:144742

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataGoogleTrendsLocationsCountryResultInfo**(`data?`): `KeywordsDataGoogleTrendsLocationsCountryResultInfo`

Defined in: main.ts:144770

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Returns

`KeywordsDataGoogleTrendsLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:144757

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#country_iso_code)

***

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:144766

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:144763

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:144744

location code

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:144755

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:144746

full name of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:144760

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:144779

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:144802

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataGoogleTrendsLocationsCountryResultInfo`

Defined in: main.ts:144795

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataGoogleTrendsLocationsCountryResultInfo`
