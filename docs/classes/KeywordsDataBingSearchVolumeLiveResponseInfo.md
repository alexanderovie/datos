[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeLiveResponseInfo

# Class: KeywordsDataBingSearchVolumeLiveResponseInfo

Defined in: main.ts:151749

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingSearchVolumeLiveResponseInfo**(`data`?): `KeywordsDataBingSearchVolumeLiveResponseInfo`

Defined in: main.ts:151755

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md)

#### Returns

`KeywordsDataBingSearchVolumeLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:151751

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:151759

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

Defined in: main.ts:151781

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingSearchVolumeLiveResponseInfo`

Defined in: main.ts:151774

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingSearchVolumeLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
