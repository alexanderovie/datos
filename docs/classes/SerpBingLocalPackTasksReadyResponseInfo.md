[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTasksReadyResponseInfo

# Class: SerpBingLocalPackTasksReadyResponseInfo

Defined in: main.ts:70182

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingLocalPackTasksReadyResponseInfo**(`data?`): `SerpBingLocalPackTasksReadyResponseInfo`

Defined in: main.ts:70188

#### Parameters

##### data?

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md)

#### Returns

`SerpBingLocalPackTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)[]

Defined in: main.ts:70184

array of tasks

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`ISerpBingLocalPackTasksReadyResponseInfo`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:70192

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

Defined in: main.ts:70214

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingLocalPackTasksReadyResponseInfo`

Defined in: main.ts:70207

#### Parameters

##### data

`any`

#### Returns

`SerpBingLocalPackTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
