[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateLiveResponseInfo

# Class: ContentGenerationGenerateLiveResponseInfo

Defined in: main.ts:190706

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateLiveResponseInfo()

> **new ContentGenerationGenerateLiveResponseInfo**(`data`?): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

Defined in: main.ts:190712

#### Parameters

##### data?

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md)

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`cost`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`status_code`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`status_message`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)[]

Defined in: main.ts:190708

array of tasks

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`time`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[`version`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190716

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

Defined in: main.ts:190738

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

Defined in: main.ts:190731

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
