[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo

# Class: SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo

Defined in: main.ts:91293

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo**(`data`?): `SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`

Defined in: main.ts:91299

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md)

#### Returns

`SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceMarketsTaskGetHtmlTaskInfo`](SerpGoogleFinanceMarketsTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:91295

array of tasks

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91303

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

Defined in: main.ts:91325

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`

Defined in: main.ts:91318

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
