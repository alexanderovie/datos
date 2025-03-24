[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoryTrendsLiveResponseInfo

# Class: ContentAnalysisCategoryTrendsLiveResponseInfo

Defined in: main.ts:192655

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentAnalysisCategoryTrendsLiveResponseInfo**(`data`?): `ContentAnalysisCategoryTrendsLiveResponseInfo`

Defined in: main.ts:192661

#### Parameters

##### data?

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md)

#### Returns

`ContentAnalysisCategoryTrendsLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`cost`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`status_code`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`status_message`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)[]

Defined in: main.ts:192657

array of tasks

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`tasks`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`tasks_count`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`tasks_error`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`time`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[`version`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192665

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

Defined in: main.ts:192687

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ContentAnalysisCategoryTrendsLiveResponseInfo`

Defined in: main.ts:192680

#### Parameters

##### data

`any`

#### Returns

`ContentAnalysisCategoryTrendsLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
