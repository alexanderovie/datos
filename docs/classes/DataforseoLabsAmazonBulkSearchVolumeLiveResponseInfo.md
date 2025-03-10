[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo

Defined in: main.ts:121638

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo()

> **new DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo**(`data`?): [`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:121644

#### Parameters

##### data?

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:121640

array of tasks

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121648

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

Defined in: main.ts:121670

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:121663

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
