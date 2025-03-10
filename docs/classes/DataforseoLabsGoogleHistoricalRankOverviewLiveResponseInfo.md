[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo

Defined in: main.ts:119230

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

Defined in: main.ts:119236

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)[]

Defined in: main.ts:119232

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119240

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

Defined in: main.ts:119262

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

Defined in: main.ts:119255

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
