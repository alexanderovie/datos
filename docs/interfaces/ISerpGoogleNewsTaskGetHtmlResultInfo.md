[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleNewsTaskGetHtmlResultInfo

# Interface: ISerpGoogleNewsTaskGetHtmlResultInfo

Defined in: main.ts:49654

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:49670

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:49674

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:49672

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:49657

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:49665

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:49663

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:49661

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49659

type of element
