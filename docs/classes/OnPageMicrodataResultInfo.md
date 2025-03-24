[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataResultInfo

# Class: OnPageMicrodataResultInfo

Defined in: main.ts:183856

## Implements

- [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageMicrodataResultInfo**(`data`?): `OnPageMicrodataResultInfo`

Defined in: main.ts:183871

#### Parameters

##### data?

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

#### Returns

`OnPageMicrodataResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:183859

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_progress`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:183861

details of the crawling session

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_status`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

Defined in: main.ts:183867

items array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items`](../interfaces/IOnPageMicrodataResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:183865

number of items in the results array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items_count`](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](TestSummary.md)

Defined in: main.ts:183863

microdata validation test results

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`test_summary`](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183880

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183905

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageMicrodataResultInfo`

Defined in: main.ts:183898

#### Parameters

##### data

`any`

#### Returns

`OnPageMicrodataResultInfo`
