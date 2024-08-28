[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IOnPageLinksResultInfo

# Interface: IOnPageLinksResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:161667

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:161669

***

### items?

> `optional` **items**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

items array

#### Defined in

main.ts:161675

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:161673

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Defined in

main.ts:161671
