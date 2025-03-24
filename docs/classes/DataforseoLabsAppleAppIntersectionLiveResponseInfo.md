[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveResponseInfo

# Class: DataforseoLabsAppleAppIntersectionLiveResponseInfo

Defined in: main.ts:137081

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAppleAppIntersectionLiveResponseInfo**(`data`?): `DataforseoLabsAppleAppIntersectionLiveResponseInfo`

Defined in: main.ts:137087

#### Parameters

##### data?

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

#### Returns

`DataforseoLabsAppleAppIntersectionLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAppleAppIntersectionLiveTaskInfo`](DataforseoLabsAppleAppIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:137083

array of tasks

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137091

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

Defined in: main.ts:137113

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAppleAppIntersectionLiveResponseInfo`

Defined in: main.ts:137106

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAppleAppIntersectionLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
