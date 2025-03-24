[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBacklinksLiveResponseInfo

# Class: BacklinksBacklinksLiveResponseInfo

Defined in: main.ts:164405

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBacklinksLiveResponseInfo**(`data`?): `BacklinksBacklinksLiveResponseInfo`

Defined in: main.ts:164411

#### Parameters

##### data?

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md)

#### Returns

`BacklinksBacklinksLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksBacklinksLiveTaskInfo`](BacklinksBacklinksLiveTaskInfo.md)[]

Defined in: main.ts:164407

array of tasks

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`time`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[`version`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:164415

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

Defined in: main.ts:164437

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBacklinksLiveResponseInfo`

Defined in: main.ts:164430

#### Parameters

##### data

`any`

#### Returns

`BacklinksBacklinksLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
