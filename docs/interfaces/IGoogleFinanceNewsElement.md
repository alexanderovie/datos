[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceNewsElement

# Interface: IGoogleFinanceNewsElement

Defined in: main.ts:88467

## Indexable

\[`key`: `string`\]: `any`

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:88479

featured image URL
URL of the news article’s featured image

***

### quotes?

> `optional` **quotes**: [`GoogleFinanceAssetPairElement`](../classes/GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:88487

market indexes quoted in the news article
information about market indexes quoted in the google_finance_news_element

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:88476

name of the news source
name of the website where the news article is published

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88484

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88471

title of the news article

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88469

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88473

URL to the page of the market index on Google Finance
