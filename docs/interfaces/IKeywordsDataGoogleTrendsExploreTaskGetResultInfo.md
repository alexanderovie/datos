[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Interface: IKeywordsDataGoogleTrendsExploreTaskGetResultInfo

Defined in: main.ts:146071

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:146084

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:146089

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](../classes/BaseGoogleTrendsItem.md)[]

Defined in: main.ts:146093

items on the Google Trends page

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:146091

the number of results returned in the items array

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:146073

keywords in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:146081

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:146078

location code in a POST array
if there is no data, then the value is null

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:146075

type of element
