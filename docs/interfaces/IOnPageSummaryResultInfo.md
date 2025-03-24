[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageSummaryResultInfo

# Interface: IOnPageSummaryResultInfo

Defined in: main.ts:177642

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_gateway\_address?

> `optional` **crawl\_gateway\_address**: `string`

Defined in: main.ts:177651

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

***

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:177645

status of the crawling session
possible values: in_progress, finished

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

Defined in: main.ts:177647

details of the crawling session

***

### crawl\_stop\_reason?

> `optional` **crawl\_stop\_reason**: `string`

Defined in: main.ts:177659

reason why the crawling stopped
information about the reason why the crawling process stopped;
possible values:
limit_exceeded – the limit set in the max_crawl_pages was exceeded;
empty_queue – all URLs in the queue were crawled;
force_stopped – the crawling process was halted using the On Page API Force Stop function;
unexpected_exception – an internal error was encountered while crawling the target, contact support for more info

***

### domain\_info?

> `optional` **domain\_info**: [`DomainInfo`](../classes/DomainInfo.md)

Defined in: main.ts:177662

domain-wide info
on-page information about the target domain and crawling process

***

### page\_metrics?

> `optional` **page\_metrics**: [`PageMetrics`](../classes/PageMetrics.md)

Defined in: main.ts:177665

page-specific info
metrics information on the target website pages
