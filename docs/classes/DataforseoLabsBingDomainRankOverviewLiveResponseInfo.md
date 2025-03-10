[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainRankOverviewLiveResponseInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResponseInfo

Defined in: main.ts:126886

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainRankOverviewLiveResponseInfo()

> **new DataforseoLabsBingDomainRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

Defined in: main.ts:126892

#### Parameters

##### data?

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)[]

Defined in: main.ts:126888

array of tasks

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:126896

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

Defined in: main.ts:126918

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

Defined in: main.ts:126911

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
