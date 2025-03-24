[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskPostResponseInfo

# Class: SerpGoogleFinanceQuoteTaskPostResponseInfo

Defined in: main.ts:92445

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteTaskPostResponseInfo**(`data`?): `SerpGoogleFinanceQuoteTaskPostResponseInfo`

Defined in: main.ts:92451

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md)

#### Returns

`SerpGoogleFinanceQuoteTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceQuoteTaskPostTaskInfo`](SerpGoogleFinanceQuoteTaskPostTaskInfo.md)[]

Defined in: main.ts:92447

array of tasks

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceQuoteTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92455

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

Defined in: main.ts:92477

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteTaskPostResponseInfo`

Defined in: main.ts:92470

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
