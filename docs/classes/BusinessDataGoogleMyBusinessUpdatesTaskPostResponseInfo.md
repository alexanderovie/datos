[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

Defined in: main.ts:227215

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo**(`data`?): `BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`

Defined in: main.ts:227221

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo.md)[]

Defined in: main.ts:227217

array of tasks

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227225

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

Defined in: main.ts:227247

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`

Defined in: main.ts:227240

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
