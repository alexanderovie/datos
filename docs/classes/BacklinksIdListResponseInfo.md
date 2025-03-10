[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIdListResponseInfo

# Class: BacklinksIdListResponseInfo

Defined in: main.ts:158558

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksIdListResponseInfo()

> **new BacklinksIdListResponseInfo**(`data`?): [`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

Defined in: main.ts:158564

#### Parameters

##### data?

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md)

#### Returns

[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`cost`](../interfaces/IBacklinksIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`status_code`](../interfaces/IBacklinksIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`status_message`](../interfaces/IBacklinksIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksIdListTaskInfo`](BacklinksIdListTaskInfo.md)[]

Defined in: main.ts:158560

array of tasks

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`tasks`](../interfaces/IBacklinksIdListResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`time`](../interfaces/IBacklinksIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md).[`version`](../interfaces/IBacklinksIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:158568

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

Defined in: main.ts:158590

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

Defined in: main.ts:158583

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
