[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

Defined in: main.ts:155079

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo**(`data`?): `KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`

Defined in: main.ts:155085

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Returns

`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)[]

Defined in: main.ts:155081

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:155089

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

Defined in: main.ts:155111

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`

Defined in: main.ts:155104

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
