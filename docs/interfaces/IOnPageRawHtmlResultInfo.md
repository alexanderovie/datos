[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRawHtmlResultInfo

# Interface: IOnPageRawHtmlResultInfo

Defined in: main.ts:184636

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:184639

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:184641

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](../classes/OnPageRawHtmlItem.md)

Defined in: main.ts:184645

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:184643

number of items in the results array
