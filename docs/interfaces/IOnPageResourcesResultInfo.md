[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

Defined in: main.ts:180118

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:180121

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:180123

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:180129

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:180127

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:180125

total number of relevant items crawled
