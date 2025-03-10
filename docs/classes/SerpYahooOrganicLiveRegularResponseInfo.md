[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveRegularResponseInfo

# Class: SerpYahooOrganicLiveRegularResponseInfo

Defined in: main.ts:79730

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveRegularResponseInfo()

> **new SerpYahooOrganicLiveRegularResponseInfo**(`data`?): [`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)

Defined in: main.ts:79736

#### Parameters

##### data?

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md)

#### Returns

[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicLiveRegularTaskInfo`](SerpYahooOrganicLiveRegularTaskInfo.md)[]

Defined in: main.ts:79732

array of tasks

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpYahooOrganicLiveRegularResponseInfo`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicLiveRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:79740

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

Defined in: main.ts:79762

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)

Defined in: main.ts:79755

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
