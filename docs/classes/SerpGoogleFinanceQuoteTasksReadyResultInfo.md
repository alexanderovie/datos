[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTasksReadyResultInfo

# Class: SerpGoogleFinanceQuoteTasksReadyResultInfo

Defined in: main.ts:92073

## Implements

- [`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceQuoteTasksReadyResultInfo()

> **new SerpGoogleFinanceQuoteTasksReadyResultInfo**(`data`?): [`SerpGoogleFinanceQuoteTasksReadyResultInfo`](SerpGoogleFinanceQuoteTasksReadyResultInfo.md)

Defined in: main.ts:92098

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleFinanceQuoteTasksReadyResultInfo`](SerpGoogleFinanceQuoteTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:92083

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:92091

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:92094

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:92088

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:92076

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:92078

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92081

type of search engine
example: finance_quote

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:92085

user-defined task identifier

#### Implementation of

[`ISerpGoogleFinanceQuoteTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceQuoteTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92107

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92131

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceQuoteTasksReadyResultInfo`](SerpGoogleFinanceQuoteTasksReadyResultInfo.md)

Defined in: main.ts:92124

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceQuoteTasksReadyResultInfo`](SerpGoogleFinanceQuoteTasksReadyResultInfo.md)
