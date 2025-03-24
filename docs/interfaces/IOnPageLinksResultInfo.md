[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageLinksResultInfo

# Interface: IOnPageLinksResultInfo

Defined in: main.ts:181524

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:181527

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:181529

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:181535

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:181533

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:181531

total number of relevant items in the database
