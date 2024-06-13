**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageRawHtmlResultInfo

# Interface: IOnPageRawHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:158820

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:158822

***

### items?

> **`optional`** **items**: [`OnPageRawHtmlItem`](../classes/OnPageRawHtmlItem.md)

items array

#### Source

main.ts:158826

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:158824
