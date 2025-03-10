[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTasksFixedResponseInfo

# Class: SerpNaverOrganicTasksFixedResponseInfo

Defined in: main.ts:83806

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTasksFixedResponseInfo()

> **new SerpNaverOrganicTasksFixedResponseInfo**(`data`?): [`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:83812

#### Parameters

##### data?

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpNaverOrganicTasksFixedTaskInfo`](SerpNaverOrganicTasksFixedTaskInfo.md)[]

Defined in: main.ts:83808

array of tasks

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpNaverOrganicTasksFixedResponseInfo`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpNaverOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83816

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

Defined in: main.ts:83838

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

Defined in: main.ts:83831

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
