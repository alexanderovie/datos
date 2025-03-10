[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingPageIntersectionLiveResponseInfo

# Class: DataforseoLabsBingPageIntersectionLiveResponseInfo

Defined in: main.ts:127542

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveResponseInfo()

> **new DataforseoLabsBingPageIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

Defined in: main.ts:127548

#### Parameters

##### data?

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:127544

array of tasks

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:127552

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

Defined in: main.ts:127574

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

Defined in: main.ts:127567

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
