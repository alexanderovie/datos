[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

Defined in: main.ts:180456

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:180459

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:180461

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:180467

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:180465

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:180463

total number of relevant items crawled
