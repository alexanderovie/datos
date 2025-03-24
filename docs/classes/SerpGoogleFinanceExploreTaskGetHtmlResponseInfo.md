[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTaskGetHtmlResponseInfo

# Class: SerpGoogleFinanceExploreTaskGetHtmlResponseInfo

Defined in: main.ts:89463

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreTaskGetHtmlResponseInfo**(`data`?): `SerpGoogleFinanceExploreTaskGetHtmlResponseInfo`

Defined in: main.ts:89469

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md)

#### Returns

`SerpGoogleFinanceExploreTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleFinanceExploreTaskGetHtmlTaskInfo`](SerpGoogleFinanceExploreTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:89465

array of tasks

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89473

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

Defined in: main.ts:89495

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreTaskGetHtmlResponseInfo`

Defined in: main.ts:89488

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
