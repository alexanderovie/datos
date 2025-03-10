[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveResponseInfo

# Class: BusinessDataBusinessListingsSearchLiveResponseInfo

Defined in: main.ts:221134

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveResponseInfo()

> **new BusinessDataBusinessListingsSearchLiveResponseInfo**(`data`?): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

Defined in: main.ts:221140

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataBusinessListingsSearchLiveTaskInfo`](BusinessDataBusinessListingsSearchLiveTaskInfo.md)[]

Defined in: main.ts:221136

array of tasks

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221144

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

Defined in: main.ts:221166

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

Defined in: main.ts:221159

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
