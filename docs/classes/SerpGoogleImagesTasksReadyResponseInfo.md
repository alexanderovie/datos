[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResponseInfo

# Class: SerpGoogleImagesTasksReadyResponseInfo

Defined in: main.ts:52881

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksReadyResponseInfo()

> **new SerpGoogleImagesTasksReadyResponseInfo**(`data`?): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

Defined in: main.ts:52887

#### Parameters

##### data?

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)[]

Defined in: main.ts:52883

array of tasks

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:52891

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

Defined in: main.ts:52913

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

Defined in: main.ts:52906

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
