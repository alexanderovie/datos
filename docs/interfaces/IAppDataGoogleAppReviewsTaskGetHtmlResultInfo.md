[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

Defined in: main.ts:216220

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:216222

app id received in a POST array

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:216235

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:216239

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:216237

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:216230

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:216228

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:216226

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:216224

type of element
