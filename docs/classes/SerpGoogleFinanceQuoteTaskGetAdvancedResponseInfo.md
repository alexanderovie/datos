[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo

# Class: SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo

Defined in: main.ts:93103

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo**(`data?`): `SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`

Defined in: main.ts:93109

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md)

#### Returns

`SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceQuoteTaskGetAdvancedTaskInfo`](SerpGoogleFinanceQuoteTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:93105

array of tasks

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:93113

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

Defined in: main.ts:93135

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`

Defined in: main.ts:93128

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
