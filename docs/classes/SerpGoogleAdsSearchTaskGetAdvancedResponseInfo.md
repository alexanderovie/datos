[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskGetAdvancedResponseInfo

# Class: SerpGoogleAdsSearchTaskGetAdvancedResponseInfo

Defined in: main.ts:65169

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskGetAdvancedResponseInfo()

> **new SerpGoogleAdsSearchTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:65175

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAdsSearchTaskGetAdvancedTaskInfo`](SerpGoogleAdsSearchTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:65171

array of tasks

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65179

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

Defined in: main.ts:65201

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:65194

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
