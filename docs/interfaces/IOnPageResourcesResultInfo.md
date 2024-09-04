[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageResourcesResultInfo

# Interface: IOnPageResourcesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:159757

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:159759

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

main.ts:159765

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:159763

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items crawled

#### Defined in

main.ts:159761
