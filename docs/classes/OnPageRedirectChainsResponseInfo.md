[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRedirectChainsResponseInfo

# Class: OnPageRedirectChainsResponseInfo

Defined in: main.ts:179766

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsResponseInfo()

> **new OnPageRedirectChainsResponseInfo**(`data`?): [`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

Defined in: main.ts:179772

#### Parameters

##### data?

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md)

#### Returns

[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`cost`](../interfaces/IOnPageRedirectChainsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`status_code`](../interfaces/IOnPageRedirectChainsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`status_message`](../interfaces/IOnPageRedirectChainsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageRedirectChainsTaskInfo`](OnPageRedirectChainsTaskInfo.md)[]

Defined in: main.ts:179768

array of tasks

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`tasks`](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`time`](../interfaces/IOnPageRedirectChainsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md).[`version`](../interfaces/IOnPageRedirectChainsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:179776

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

Defined in: main.ts:179798

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

Defined in: main.ts:179791

#### Parameters

##### data

`any`

#### Returns

[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
