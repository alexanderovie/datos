[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageKeywordDensityResultInfo

# Interface: IOnPageKeywordDensityResultInfo

Defined in: main.ts:180934

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:180937

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:180939

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageKeywordDensityItem`](../classes/OnPageKeywordDensityItem.md)[]

Defined in: main.ts:180946

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:180944

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:180942

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters
