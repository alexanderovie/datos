[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsCountryResultInfo

# Class: KeywordsDataGoogleAdsLocationsCountryResultInfo

Defined in: main.ts:135815

## Implements

- [`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsCountryResultInfo()

> **new KeywordsDataGoogleAdsLocationsCountryResultInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

Defined in: main.ts:135837

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:135830

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:135817

location code

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:135828

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:135819

full name of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:135833

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135846

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135867

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

Defined in: main.ts:135860

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)
