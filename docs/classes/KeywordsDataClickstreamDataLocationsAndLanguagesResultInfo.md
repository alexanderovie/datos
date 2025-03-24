[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Class: KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

Defined in: main.ts:159328

## Implements

- [`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo**(`data`?): `KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`

Defined in: main.ts:159348

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Returns

`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

Defined in: main.ts:159344

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`available_languages`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#available_languages)

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:159337

ISO country code of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:159330

location code

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:159335

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:159332

full name of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:159341

location type
possible values:
Country

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_type`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159357

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:159383

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`

Defined in: main.ts:159376

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`
