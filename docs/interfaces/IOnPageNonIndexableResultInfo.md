[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageNonIndexableResultInfo

# Interface: IOnPageNonIndexableResultInfo

Defined in: main.ts:182480

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:182483

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:182485

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageNonIndexableItem`](../classes/OnPageNonIndexableItem.md)[]

Defined in: main.ts:182491

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:182489

number of items in the results array

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:182487

total number of relevant items in the database
