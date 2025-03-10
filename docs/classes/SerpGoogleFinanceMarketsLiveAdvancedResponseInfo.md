[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsLiveAdvancedResponseInfo

# Class: SerpGoogleFinanceMarketsLiveAdvancedResponseInfo

Defined in: main.ts:91288

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsLiveAdvancedResponseInfo()

> **new SerpGoogleFinanceMarketsLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](SerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

Defined in: main.ts:91294

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](SerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceMarketsLiveAdvancedTaskInfo`](SerpGoogleFinanceMarketsLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:91290

array of tasks

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91298

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

Defined in: main.ts:91320

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](SerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

Defined in: main.ts:91313

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsLiveAdvancedResponseInfo`](SerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
