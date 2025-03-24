[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetResultInfo

Defined in: main.ts:157120

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordPerformanceTaskGetResultInfo**(`data`?): `KeywordsDataBingKeywordPerformanceTaskGetResultInfo`

Defined in: main.ts:157143

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Returns

`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:157122

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword)

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:157139

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`keyword_kpi`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword_kpi)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:157128

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:157125

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#location_code)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:157136

indicates the month for which the data is provided for
example:
10

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`month`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:157132

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`year`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157152

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157174

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordPerformanceTaskGetResultInfo`

Defined in: main.ts:157167

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`
