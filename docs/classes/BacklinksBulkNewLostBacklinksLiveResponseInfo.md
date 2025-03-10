[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveResponseInfo

# Class: BacklinksBulkNewLostBacklinksLiveResponseInfo

Defined in: main.ts:171474

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostBacklinksLiveResponseInfo()

> **new BacklinksBulkNewLostBacklinksLiveResponseInfo**(`data`?): [`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

Defined in: main.ts:171480

#### Parameters

##### data?

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksBulkNewLostBacklinksLiveTaskInfo`](BacklinksBulkNewLostBacklinksLiveTaskInfo.md)[]

Defined in: main.ts:171476

array of tasks

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`time`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResponseInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md).[`version`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171484

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

Defined in: main.ts:171506

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

Defined in: main.ts:171499

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
