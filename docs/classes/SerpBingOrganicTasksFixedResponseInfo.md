[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksFixedResponseInfo

# Class: SerpBingOrganicTasksFixedResponseInfo

Defined in: main.ts:67090

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingOrganicTasksFixedResponseInfo**(`data`?): `SerpBingOrganicTasksFixedResponseInfo`

Defined in: main.ts:67096

#### Parameters

##### data?

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md)

#### Returns

`SerpBingOrganicTasksFixedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTasksFixedTaskInfo`](SerpBingOrganicTasksFixedTaskInfo.md)[]

Defined in: main.ts:67092

array of tasks

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpBingOrganicTasksFixedResponseInfo`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67100

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

Defined in: main.ts:67122

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingOrganicTasksFixedResponseInfo`

Defined in: main.ts:67115

#### Parameters

##### data

`any`

#### Returns

`SerpBingOrganicTasksFixedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
