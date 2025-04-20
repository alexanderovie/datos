[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourcesResultInfo

# Class: OnPageResourcesResultInfo

Defined in: main.ts:180388

## Implements

- [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageResourcesResultInfo**(`data?`): `OnPageResourcesResultInfo`

Defined in: main.ts:180403

#### Parameters

##### data?

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

#### Returns

`OnPageResourcesResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:180391

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageResourcesResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:180393

details of the crawling session

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_status`](../interfaces/IOnPageResourcesResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:180399

items array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items`](../interfaces/IOnPageResourcesResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:180397

number of items in the results array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items_count`](../interfaces/IOnPageResourcesResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:180395

total number of relevant items crawled

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`total_items_count`](../interfaces/IOnPageResourcesResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:180412

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:180437

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageResourcesResultInfo`

Defined in: main.ts:180430

#### Parameters

##### data

`any`

#### Returns

`OnPageResourcesResultInfo`
