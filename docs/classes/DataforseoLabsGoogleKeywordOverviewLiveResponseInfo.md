[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordOverviewLiveResponseInfo

Defined in: main.ts:123589

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleKeywordOverviewLiveResponseInfo**(`data`?): `DataforseoLabsGoogleKeywordOverviewLiveResponseInfo`

Defined in: main.ts:123595

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md)

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleKeywordOverviewLiveTaskInfo`](DataforseoLabsGoogleKeywordOverviewLiveTaskInfo.md)[]

Defined in: main.ts:123591

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123599

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

Defined in: main.ts:123621

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleKeywordOverviewLiveResponseInfo`

Defined in: main.ts:123614

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
