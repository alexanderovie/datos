[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

Defined in: main.ts:185322

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageContentParsingResultInfo**(`data`?): `OnPageContentParsingResultInfo`

Defined in: main.ts:185335

#### Parameters

##### data?

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

#### Returns

`OnPageContentParsingResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:185325

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:185327

details of the crawling session

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

Defined in: main.ts:185331

items array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items`](../interfaces/IOnPageContentParsingResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:185329

number of items in the results array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185344

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185368

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageContentParsingResultInfo`

Defined in: main.ts:185361

#### Parameters

##### data

`any`

#### Returns

`OnPageContentParsingResultInfo`
