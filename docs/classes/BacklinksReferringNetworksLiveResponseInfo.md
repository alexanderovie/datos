[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveResponseInfo

# Class: BacklinksReferringNetworksLiveResponseInfo

Defined in: main.ts:166280

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveResponseInfo()

> **new BacklinksReferringNetworksLiveResponseInfo**(`data`?): [`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

Defined in: main.ts:166286

#### Parameters

##### data?

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md)

#### Returns

[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksReferringNetworksLiveTaskInfo`](BacklinksReferringNetworksLiveTaskInfo.md)[]

Defined in: main.ts:166282

array of tasks

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`time`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[`version`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:166290

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

Defined in: main.ts:166312

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

Defined in: main.ts:166305

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
