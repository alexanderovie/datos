[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveResponseInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResponseInfo

Defined in: main.ts:113710

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSubdomainsLiveResponseInfo()

> **new DataforseoLabsGoogleSubdomainsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

Defined in: main.ts:113716

#### Parameters

##### data?

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)[]

Defined in: main.ts:113712

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113720

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

Defined in: main.ts:113742

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

Defined in: main.ts:113735

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
