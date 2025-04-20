[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

Defined in: main.ts:150084

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:150099

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

Defined in: main.ts:150103

contains keyword popularity and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:150101

the number of results returned in the items array

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:150086

keywords in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:150094

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:150091

location code in a POST array
if there is no data, then the value is null

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:150088

type of element
