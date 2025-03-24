[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetHtmlResponseInfo

# Class: SerpBingOrganicTaskGetHtmlResponseInfo

Defined in: main.ts:67846

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingOrganicTaskGetHtmlResponseInfo**(`data`?): `SerpBingOrganicTaskGetHtmlResponseInfo`

Defined in: main.ts:67852

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md)

#### Returns

`SerpBingOrganicTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:67848

array of tasks

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67856

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

Defined in: main.ts:67878

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingOrganicTaskGetHtmlResponseInfo`

Defined in: main.ts:67871

#### Parameters

##### data

`any`

#### Returns

`SerpBingOrganicTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
