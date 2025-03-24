[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

Defined in: main.ts:183924

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:183927

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:183929

details of the crawling session

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

Defined in: main.ts:183935

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:183933

number of items in the results array

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

Defined in: main.ts:183931

microdata validation test results
