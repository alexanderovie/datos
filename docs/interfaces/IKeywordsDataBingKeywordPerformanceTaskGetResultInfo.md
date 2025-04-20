[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Interface: IKeywordsDataBingKeywordPerformanceTaskGetResultInfo

Defined in: main.ts:157314

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:157316

keyword in a POST array

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](../classes/KeywordKpi.md)

Defined in: main.ts:157333

object containing keyword metrics
if there is no data, then the value is null

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:157322

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:157319

location code in a POST array
if there is no data, then the value is null

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:157330

indicates the month for which the data is provided for
example:
10

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:157326

indicates the year for which the data is provided for
example:
2020
