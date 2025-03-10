[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableResponseInfo

# Class: OnPageNonIndexableResponseInfo

Defined in: main.ts:180142

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableResponseInfo()

> **new OnPageNonIndexableResponseInfo**(`data`?): [`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

Defined in: main.ts:180148

#### Parameters

##### data?

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md)

#### Returns

[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`cost`](../interfaces/IOnPageNonIndexableResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`status_code`](../interfaces/IOnPageNonIndexableResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`status_message`](../interfaces/IOnPageNonIndexableResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageNonIndexableTaskInfo`](OnPageNonIndexableTaskInfo.md)[]

Defined in: main.ts:180144

array of tasks

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`tasks`](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`tasks_count`](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`tasks_error`](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`time`](../interfaces/IOnPageNonIndexableResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md).[`version`](../interfaces/IOnPageNonIndexableResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180152

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

Defined in: main.ts:180174

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

Defined in: main.ts:180167

#### Parameters

##### data

`any`

#### Returns

[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
