[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAvailableFiltersResponseInfo

# Class: DataforseoLabsAvailableFiltersResponseInfo

Defined in: main.ts:100620

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAvailableFiltersResponseInfo()

> **new DataforseoLabsAvailableFiltersResponseInfo**(`data`?): [`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

Defined in: main.ts:100625

#### Parameters

##### data?

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md)

#### Returns

[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAvailableFiltersTaskInfo`](DataforseoLabsAvailableFiltersTaskInfo.md)[]

Defined in: main.ts:100621

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsAvailableFiltersResponseInfo`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100629

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

Defined in: main.ts:100651

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

Defined in: main.ts:100644

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
