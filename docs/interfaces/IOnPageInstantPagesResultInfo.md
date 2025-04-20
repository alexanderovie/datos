[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageInstantPagesResultInfo

# Interface: IOnPageInstantPagesResultInfo

Defined in: main.ts:186827

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_gateway\_address?

> `optional` **crawl\_gateway\_address**: `string`

Defined in: main.ts:186837

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

***

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:186830

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:186833

details of the crawling session
in this case the value will be null

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:186841

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:186839

number of items in the results array
