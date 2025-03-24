[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveResultInfo

Defined in: main.ts:149418

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataDataforseoTrendsDemographyLiveResultInfo**(`data`?): `KeywordsDataDataforseoTrendsDemographyLiveResultInfo`

Defined in: main.ts:149441

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Returns

`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:149433

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)[]

Defined in: main.ts:149437

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:149435

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:149420

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:149428

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:149425

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:149422

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149450

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149481

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataDataforseoTrendsDemographyLiveResultInfo`

Defined in: main.ts:149474

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`
