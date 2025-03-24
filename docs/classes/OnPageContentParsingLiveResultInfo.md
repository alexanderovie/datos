[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

Defined in: main.ts:185792

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageContentParsingLiveResultInfo**(`data`?): `OnPageContentParsingLiveResultInfo`

Defined in: main.ts:185805

#### Parameters

##### data?

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

#### Returns

`OnPageContentParsingLiveResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:185795

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:185797

details of the crawling session

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

Defined in: main.ts:185801

items array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:185799

number of items in the results array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185814

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185838

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageContentParsingLiveResultInfo`

Defined in: main.ts:185831

#### Parameters

##### data

`any`

#### Returns

`OnPageContentParsingLiveResultInfo`
