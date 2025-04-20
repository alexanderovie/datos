[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYahooOrganicTaskGetHtmlResultInfo

# Interface: ISerpYahooOrganicTaskGetHtmlResultInfo

Defined in: main.ts:79649

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:79665

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:79669

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:79667

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:79652

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:79660

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:79658

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:79656

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:79654

type of element
