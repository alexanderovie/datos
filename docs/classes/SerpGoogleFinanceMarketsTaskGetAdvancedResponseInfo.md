[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo

# Class: SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo

Defined in: main.ts:90648

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo()

> **new SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:90654

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceMarketsTaskGetAdvancedTaskInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:90650

array of tasks

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90658

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

Defined in: main.ts:90680

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:90673

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
