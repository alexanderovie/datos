[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksReadyResponseInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResponseInfo

Defined in: main.ts:75974

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksReadyResponseInfo()

> **new SerpYoutubeVideoCommentsTasksReadyResponseInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

Defined in: main.ts:75980

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)[]

Defined in: main.ts:75976

array of tasks

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75984

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

Defined in: main.ts:76006

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

Defined in: main.ts:75999

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
