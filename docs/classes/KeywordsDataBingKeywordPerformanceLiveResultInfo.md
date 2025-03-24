[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceLiveResultInfo

# Class: KeywordsDataBingKeywordPerformanceLiveResultInfo

Defined in: main.ts:157518

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordPerformanceLiveResultInfo**(`data`?): `KeywordsDataBingKeywordPerformanceLiveResultInfo`

Defined in: main.ts:157541

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Returns

`KeywordsDataBingKeywordPerformanceLiveResultInfo`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:157520

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:157537

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword_kpi`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:157526

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:157523

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:157534

indicates the month for which the data is provided for
example:
10

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`month`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:157530

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`year`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157550

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157572

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordPerformanceLiveResultInfo`

Defined in: main.ts:157565

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordPerformanceLiveResultInfo`
