[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsIdListResponseInfo

# Class: DataforseoLabsIdListResponseInfo

Defined in: main.ts:99548

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListResponseInfo()

> **new DataforseoLabsIdListResponseInfo**(`data`?): [`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)

Defined in: main.ts:99554

#### Parameters

##### data?

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md)

#### Returns

[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsIdListTaskInfo`](DataforseoLabsIdListTaskInfo.md)[]

Defined in: main.ts:99550

array of tasks

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsIdListResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`time`](../interfaces/IDataforseoLabsIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsIdListResponseInfo`](../interfaces/IDataforseoLabsIdListResponseInfo.md).[`version`](../interfaces/IDataforseoLabsIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99558

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

Defined in: main.ts:99580

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)

Defined in: main.ts:99573

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
