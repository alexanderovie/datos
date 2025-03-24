[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTasksReadyResponseInfo

# Class: AppDataGoogleAppSearchesTasksReadyResponseInfo

Defined in: main.ts:211527

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGoogleAppSearchesTasksReadyResponseInfo**(`data`?): `AppDataGoogleAppSearchesTasksReadyResponseInfo`

Defined in: main.ts:211533

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Returns

`AppDataGoogleAppSearchesTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppSearchesTasksReadyTaskInfo`](AppDataGoogleAppSearchesTasksReadyTaskInfo.md)[]

Defined in: main.ts:211529

array of tasks

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211537

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

Defined in: main.ts:211559

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGoogleAppSearchesTasksReadyResponseInfo`

Defined in: main.ts:211552

#### Parameters

##### data

`any`

#### Returns

`AppDataGoogleAppSearchesTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
