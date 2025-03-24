[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingLiveResultInfo

# Interface: IOnPageContentParsingLiveResultInfo

Defined in: main.ts:185856

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:185859

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:185861

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

Defined in: main.ts:185865

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:185863

number of items in the results array
