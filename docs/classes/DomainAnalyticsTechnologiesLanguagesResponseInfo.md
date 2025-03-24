[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesLanguagesResponseInfo

# Class: DomainAnalyticsTechnologiesLanguagesResponseInfo

Defined in: main.ts:96755

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsTechnologiesLanguagesResponseInfo**(`data`?): `DomainAnalyticsTechnologiesLanguagesResponseInfo`

Defined in: main.ts:96761

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md)

#### Returns

`DomainAnalyticsTechnologiesLanguagesResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesLanguagesTaskInfo`](DomainAnalyticsTechnologiesLanguagesTaskInfo.md)[]

Defined in: main.ts:96757

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96765

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

Defined in: main.ts:96787

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsTechnologiesLanguagesResponseInfo`

Defined in: main.ts:96780

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsTechnologiesLanguagesResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
