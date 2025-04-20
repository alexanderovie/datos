[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveResponseInfo

# Class: BacklinksDomainPagesSummaryLiveResponseInfo

Defined in: main.ts:167373

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksDomainPagesSummaryLiveResponseInfo**(`data?`): `BacklinksDomainPagesSummaryLiveResponseInfo`

Defined in: main.ts:167379

#### Parameters

##### data?

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md)

#### Returns

`BacklinksDomainPagesSummaryLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksDomainPagesSummaryLiveTaskInfo`](BacklinksDomainPagesSummaryLiveTaskInfo.md)[]

Defined in: main.ts:167375

array of tasks

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`time`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResponseInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md).[`version`](../interfaces/IBacklinksDomainPagesSummaryLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:167383

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:167405

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksDomainPagesSummaryLiveResponseInfo`

Defined in: main.ts:167398

#### Parameters

##### data

`any`

#### Returns

`BacklinksDomainPagesSummaryLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
