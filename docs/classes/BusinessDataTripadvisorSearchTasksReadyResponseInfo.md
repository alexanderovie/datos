[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTasksReadyResponseInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResponseInfo

Defined in: main.ts:237502

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTasksReadyResponseInfo()

> **new BusinessDataTripadvisorSearchTasksReadyResponseInfo**(`data`?): [`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

Defined in: main.ts:237508

#### Parameters

##### data?

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)[]

Defined in: main.ts:237504

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:237512

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

Defined in: main.ts:237534

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

Defined in: main.ts:237527

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
