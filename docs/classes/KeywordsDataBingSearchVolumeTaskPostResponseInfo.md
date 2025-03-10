[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTaskPostResponseInfo

# Class: KeywordsDataBingSearchVolumeTaskPostResponseInfo

Defined in: main.ts:148384

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTaskPostResponseInfo()

> **new KeywordsDataBingSearchVolumeTaskPostResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

Defined in: main.ts:148390

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)[]

Defined in: main.ts:148386

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148394

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

Defined in: main.ts:148416

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

Defined in: main.ts:148409

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
