[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskGetResponseInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResponseInfo

Defined in: main.ts:241359

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTripadvisorReviewsTaskGetResponseInfo**(`data`?): `BusinessDataTripadvisorReviewsTaskGetResponseInfo`

Defined in: main.ts:241365

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

#### Returns

`BusinessDataTripadvisorReviewsTaskGetResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)[]

Defined in: main.ts:241361

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:241369

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

Defined in: main.ts:241391

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTripadvisorReviewsTaskGetResponseInfo`

Defined in: main.ts:241384

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTripadvisorReviewsTaskGetResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
