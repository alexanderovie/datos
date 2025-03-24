[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveHtmlResponseInfo

# Class: SerpGoogleNewsLiveHtmlResponseInfo

Defined in: main.ts:50666

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleNewsLiveHtmlResponseInfo**(`data`?): `SerpGoogleNewsLiveHtmlResponseInfo`

Defined in: main.ts:50672

#### Parameters

##### data?

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md)

#### Returns

`SerpGoogleNewsLiveHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleNewsLiveHtmlTaskInfo`](SerpGoogleNewsLiveHtmlTaskInfo.md)[]

Defined in: main.ts:50668

array of tasks

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResponseInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleNewsLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50676

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

Defined in: main.ts:50698

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleNewsLiveHtmlResponseInfo`

Defined in: main.ts:50691

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleNewsLiveHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
