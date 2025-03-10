[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteLiveAdvancedResponseInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResponseInfo

Defined in: main.ts:59196

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteLiveAdvancedResponseInfo()

> **new SerpGoogleAutocompleteLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

Defined in: main.ts:59202

#### Parameters

##### data?

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAutocompleteLiveAdvancedTaskInfo`](SerpGoogleAutocompleteLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:59198

array of tasks

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59206

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

Defined in: main.ts:59228

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

Defined in: main.ts:59221

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
