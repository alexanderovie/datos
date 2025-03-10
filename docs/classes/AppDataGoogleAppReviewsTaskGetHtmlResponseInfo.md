[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResponseInfo

Defined in: main.ts:213360

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetHtmlResponseInfo()

> **new AppDataGoogleAppReviewsTaskGetHtmlResponseInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:213366

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppReviewsTaskGetHtmlTaskInfo`](AppDataGoogleAppReviewsTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:213362

array of tasks

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:213370

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

Defined in: main.ts:213392

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

Defined in: main.ts:213385

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
