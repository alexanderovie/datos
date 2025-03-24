[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsResultInfo

# Interface: IOnPageRedirectChainsResultInfo

Defined in: main.ts:182104

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:182107

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:182109

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageRedirectChainsItem`](../classes/OnPageRedirectChainsItem.md)[]

Defined in: main.ts:182115

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:182113

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:182111

total number of relevant items in the database
