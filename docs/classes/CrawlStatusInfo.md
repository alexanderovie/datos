[**Documentation**](../README.md)

***

[Documentation](../README.md) / CrawlStatusInfo

# Class: CrawlStatusInfo

Defined in: main.ts:24531

## Implements

- [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CrawlStatusInfo**(`data`?): `CrawlStatusInfo`

Defined in: main.ts:24542

#### Parameters

##### data?

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

#### Returns

`CrawlStatusInfo`

## Properties

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:24534

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`max_crawl_pages`](../interfaces/ICrawlStatusInfo.md#max_crawl_pages)

***

### pages\_crawled?

> `optional` **pages\_crawled**: `number`

Defined in: main.ts:24538

number of crawled pages

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_crawled`](../interfaces/ICrawlStatusInfo.md#pages_crawled)

***

### pages\_in\_queue?

> `optional` **pages\_in\_queue**: `number`

Defined in: main.ts:24536

number of pages that are currently in the crawling queue

#### Implementation of

[`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md).[`pages_in_queue`](../interfaces/ICrawlStatusInfo.md#pages_in_queue)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24551

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `CrawlStatusInfo`

Defined in: main.ts:24563

#### Parameters

##### data

`any`

#### Returns

`CrawlStatusInfo`
