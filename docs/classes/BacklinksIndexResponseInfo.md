[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIndexResponseInfo

# Class: BacklinksIndexResponseInfo

Defined in: main.ts:162001

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksIndexResponseInfo**(`data?`): `BacklinksIndexResponseInfo`

Defined in: main.ts:162007

#### Parameters

##### data?

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md)

#### Returns

`BacklinksIndexResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`cost`](../interfaces/IBacklinksIndexResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`status_code`](../interfaces/IBacklinksIndexResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`status_message`](../interfaces/IBacklinksIndexResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksIndexTaskInfo`](BacklinksIndexTaskInfo.md)[]

Defined in: main.ts:162003

array of tasks

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`tasks`](../interfaces/IBacklinksIndexResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksIndexResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksIndexResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`time`](../interfaces/IBacklinksIndexResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IBacklinksIndexResponseInfo`](../interfaces/IBacklinksIndexResponseInfo.md).[`version`](../interfaces/IBacklinksIndexResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:162011

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:162033

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksIndexResponseInfo`

Defined in: main.ts:162026

#### Parameters

##### data

`any`

#### Returns

`BacklinksIndexResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
