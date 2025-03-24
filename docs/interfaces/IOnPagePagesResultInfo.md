[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePagesResultInfo

# Interface: IOnPagePagesResultInfo

Defined in: main.ts:178998

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:179001

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:179003

details of the crawling session

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:179009

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:179007

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:179005

total number of relevant items in the database
