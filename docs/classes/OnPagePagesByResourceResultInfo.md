[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesByResourceResultInfo

# Class: OnPagePagesByResourceResultInfo

Defined in: main.ts:179310

## Implements

- [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPagePagesByResourceResultInfo**(`data`?): `OnPagePagesByResourceResultInfo`

Defined in: main.ts:179325

#### Parameters

##### data?

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

#### Returns

`OnPagePagesByResourceResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:179313

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:179315

details of the crawling session

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`crawl_status`](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:179321

items array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items`](../interfaces/IOnPagePagesByResourceResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:179319

number of items in the results array

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:179317

total number of relevant items in the database

#### Implementation of

[`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md).[`total_items_count`](../interfaces/IOnPagePagesByResourceResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:179334

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:179359

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPagePagesByResourceResultInfo`

Defined in: main.ts:179352

#### Parameters

##### data

`any`

#### Returns

`OnPagePagesByResourceResultInfo`
