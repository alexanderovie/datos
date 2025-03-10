[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTaskGetResponseInfo

# Class: BusinessDataGoogleHotelSearchesTaskGetResponseInfo

Defined in: main.ts:226974

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTaskGetResponseInfo()

> **new BusinessDataGoogleHotelSearchesTaskGetResponseInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

Defined in: main.ts:226980

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)[]

Defined in: main.ts:226976

array of tasks

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226984

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

Defined in: main.ts:227006

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

Defined in: main.ts:226999

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
