[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResultInfo

Defined in: main.ts:146102

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataGoogleTrendsExploreTaskGetResultInfo**(`data?`): `KeywordsDataGoogleTrendsExploreTaskGetResultInfo`

Defined in: main.ts:146128

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Returns

`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:146115

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`check_url`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:146120

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`datetime`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

Defined in: main.ts:146124

items on the Google Trends page

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:146122

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:146104

keywords in a POST array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:146112

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:146109

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:146106

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:146137

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:146169

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataGoogleTrendsExploreTaskGetResultInfo`

Defined in: main.ts:146162

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`
