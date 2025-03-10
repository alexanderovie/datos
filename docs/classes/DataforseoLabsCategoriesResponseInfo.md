[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsCategoriesResponseInfo

# Class: DataforseoLabsCategoriesResponseInfo

Defined in: main.ts:101100

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCategoriesResponseInfo()

> **new DataforseoLabsCategoriesResponseInfo**(`data`?): [`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

Defined in: main.ts:101106

#### Parameters

##### data?

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md)

#### Returns

[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)[]

Defined in: main.ts:101102

array of tasks

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`time`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[`version`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101110

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

Defined in: main.ts:101132

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

Defined in: main.ts:101125

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
