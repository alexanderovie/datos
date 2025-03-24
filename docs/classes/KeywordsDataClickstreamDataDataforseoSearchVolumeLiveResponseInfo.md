[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo

Defined in: main.ts:159913

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo**(`data`?): `KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`

Defined in: main.ts:159919

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)

#### Returns

`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveTaskInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:159915

array of tasks

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159923

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

Defined in: main.ts:159945

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`

Defined in: main.ts:159938

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
