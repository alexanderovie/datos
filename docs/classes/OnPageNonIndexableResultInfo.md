[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableResultInfo

# Class: OnPageNonIndexableResultInfo

Defined in: main.ts:182412

## Implements

- [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageNonIndexableResultInfo**(`data`?): `OnPageNonIndexableResultInfo`

Defined in: main.ts:182427

#### Parameters

##### data?

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

#### Returns

`OnPageNonIndexableResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:182415

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_progress`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:182417

details of the crawling session

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`crawl_status`](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)[]

Defined in: main.ts:182423

items array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items`](../interfaces/IOnPageNonIndexableResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:182421

number of items in the results array

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:182419

total number of relevant items in the database

#### Implementation of

[`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md).[`total_items_count`](../interfaces/IOnPageNonIndexableResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182436

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182461

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageNonIndexableResultInfo`

Defined in: main.ts:182454

#### Parameters

##### data

`any`

#### Returns

`OnPageNonIndexableResultInfo`
