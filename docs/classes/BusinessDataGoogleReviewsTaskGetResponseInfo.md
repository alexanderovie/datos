[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTaskGetResponseInfo

# Class: BusinessDataGoogleReviewsTaskGetResponseInfo

Defined in: main.ts:234881

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleReviewsTaskGetResponseInfo**(`data?`): `BusinessDataGoogleReviewsTaskGetResponseInfo`

Defined in: main.ts:234887

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md)

#### Returns

`BusinessDataGoogleReviewsTaskGetResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)[]

Defined in: main.ts:234883

array of tasks

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleReviewsTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:234891

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:234913

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleReviewsTaskGetResponseInfo`

Defined in: main.ts:234906

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleReviewsTaskGetResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
