[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTasksReadyResponseInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyResponseInfo

Defined in: main.ts:238480

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTasksReadyResponseInfo()

> **new BusinessDataTripadvisorReviewsTasksReadyResponseInfo**(`data`?): [`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:238486

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorReviewsTasksReadyTaskInfo`](BusinessDataTripadvisorReviewsTasksReadyTaskInfo.md)[]

Defined in: main.ts:238482

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:238490

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

Defined in: main.ts:238512

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

Defined in: main.ts:238505

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
