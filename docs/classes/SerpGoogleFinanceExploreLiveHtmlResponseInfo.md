[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreLiveHtmlResponseInfo

# Class: SerpGoogleFinanceExploreLiveHtmlResponseInfo

Defined in: main.ts:89832

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreLiveHtmlResponseInfo()

> **new SerpGoogleFinanceExploreLiveHtmlResponseInfo**(`data`?): [`SerpGoogleFinanceExploreLiveHtmlResponseInfo`](SerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

Defined in: main.ts:89838

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlResponseInfo`](SerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceExploreLiveHtmlTaskInfo`](SerpGoogleFinanceExploreLiveHtmlTaskInfo.md)[]

Defined in: main.ts:89834

array of tasks

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89842

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

Defined in: main.ts:89864

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreLiveHtmlResponseInfo`](SerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

Defined in: main.ts:89857

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlResponseInfo`](SerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
