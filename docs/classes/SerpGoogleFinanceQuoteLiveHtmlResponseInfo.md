[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveHtmlResponseInfo

# Class: SerpGoogleFinanceQuoteLiveHtmlResponseInfo

Defined in: main.ts:94043

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteLiveHtmlResponseInfo**(`data`?): `SerpGoogleFinanceQuoteLiveHtmlResponseInfo`

Defined in: main.ts:94049

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md)

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceQuoteLiveHtmlTaskInfo`](SerpGoogleFinanceQuoteLiveHtmlTaskInfo.md)[]

Defined in: main.ts:94045

array of tasks

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94053

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

Defined in: main.ts:94075

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteLiveHtmlResponseInfo`

Defined in: main.ts:94068

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
