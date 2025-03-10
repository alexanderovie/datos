[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksErrorsResponseInfo

# Class: BacklinksErrorsResponseInfo

Defined in: main.ts:158898

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksErrorsResponseInfo()

> **new BacklinksErrorsResponseInfo**(`data`?): [`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

Defined in: main.ts:158904

#### Parameters

##### data?

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md)

#### Returns

[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`cost`](../interfaces/IBacklinksErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`status_code`](../interfaces/IBacklinksErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`status_message`](../interfaces/IBacklinksErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksErrorsTaskInfo`](BacklinksErrorsTaskInfo.md)[]

Defined in: main.ts:158900

array of tasks

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`tasks`](../interfaces/IBacklinksErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`time`](../interfaces/IBacklinksErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md).[`version`](../interfaces/IBacklinksErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:158908

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

Defined in: main.ts:158930

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

Defined in: main.ts:158923

#### Parameters

##### data

`any`

#### Returns

[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
