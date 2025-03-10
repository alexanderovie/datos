[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo

# Class: SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo

Defined in: main.ts:92782

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo()

> **new SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo**(`data`?): [`SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

Defined in: main.ts:92788

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceQuoteTaskGetHtmlTaskInfo`](SerpGoogleFinanceQuoteTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:92784

array of tasks

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92792

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92814

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

Defined in: main.ts:92807

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo`](SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
