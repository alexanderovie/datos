[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentResultInfo

# Class: OnPageDuplicateContentResultInfo

Defined in: main.ts:181028

## Implements

- [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageDuplicateContentResultInfo**(`data`?): `OnPageDuplicateContentResultInfo`

Defined in: main.ts:181041

#### Parameters

##### data?

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

#### Returns

`OnPageDuplicateContentResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:181031

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:181033

details of the crawling session

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)[]

Defined in: main.ts:181037

items array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items`](../interfaces/IOnPageDuplicateContentResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:181035

number of items in the results array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateContentResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:181050

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:181074

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageDuplicateContentResultInfo`

Defined in: main.ts:181067

#### Parameters

##### data

`any`

#### Returns

`OnPageDuplicateContentResultInfo`
