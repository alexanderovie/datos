[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

Defined in: main.ts:147630

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo()

> **new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

Defined in: main.ts:147636

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)[]

Defined in: main.ts:147632

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147640

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

Defined in: main.ts:147662

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

Defined in: main.ts:147655

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
