[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveAdvancedResponseInfo

# Class: SerpGoogleFinanceQuoteLiveAdvancedResponseInfo

Defined in: main.ts:93763

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteLiveAdvancedResponseInfo**(`data?`): `SerpGoogleFinanceQuoteLiveAdvancedResponseInfo`

Defined in: main.ts:93769

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md)

#### Returns

`SerpGoogleFinanceQuoteLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceQuoteLiveAdvancedTaskInfo`](SerpGoogleFinanceQuoteLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:93765

array of tasks

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:93773

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

Defined in: main.ts:93795

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteLiveAdvancedResponseInfo`

Defined in: main.ts:93788

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
