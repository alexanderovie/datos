[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

Defined in: main.ts:184580

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageRawHtmlResultInfo**(`data?`): `OnPageRawHtmlResultInfo`

Defined in: main.ts:184593

#### Parameters

##### data?

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

#### Returns

`OnPageRawHtmlResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:184583

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:184585

details of the crawling session

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_status`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

Defined in: main.ts:184589

items array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items`](../interfaces/IOnPageRawHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:184587

number of items in the results array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items_count`](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:184602

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:184622

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageRawHtmlResultInfo`

Defined in: main.ts:184615

#### Parameters

##### data

`any`

#### Returns

`OnPageRawHtmlResultInfo`
