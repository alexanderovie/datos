[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsLiveHtmlResponseInfo

# Class: SerpGoogleFinanceMarketsLiveHtmlResponseInfo

Defined in: main.ts:91660

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsLiveHtmlResponseInfo()

> **new SerpGoogleFinanceMarketsLiveHtmlResponseInfo**(`data`?): [`SerpGoogleFinanceMarketsLiveHtmlResponseInfo`](SerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

Defined in: main.ts:91666

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsLiveHtmlResponseInfo`](SerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceMarketsLiveHtmlTaskInfo`](SerpGoogleFinanceMarketsLiveHtmlTaskInfo.md)[]

Defined in: main.ts:91662

array of tasks

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91670

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

Defined in: main.ts:91692

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsLiveHtmlResponseInfo`](SerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

Defined in: main.ts:91685

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsLiveHtmlResponseInfo`](SerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
