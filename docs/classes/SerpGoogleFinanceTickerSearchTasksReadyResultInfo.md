[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceTickerSearchTasksReadyResultInfo

# Class: SerpGoogleFinanceTickerSearchTasksReadyResultInfo

Defined in: main.ts:94546

## Implements

- [`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceTickerSearchTasksReadyResultInfo**(`data?`): `SerpGoogleFinanceTickerSearchTasksReadyResultInfo`

Defined in: main.ts:94571

#### Parameters

##### data?

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md)

#### Returns

`SerpGoogleFinanceTickerSearchTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:94556

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:94564

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:94567

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:94561

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:94549

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:94551

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94554

type of search engine
example: finance_ticker_search

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:94558

user-defined task identifier

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceTickerSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:94580

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:94604

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceTickerSearchTasksReadyResultInfo`

Defined in: main.ts:94597

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceTickerSearchTasksReadyResultInfo`
