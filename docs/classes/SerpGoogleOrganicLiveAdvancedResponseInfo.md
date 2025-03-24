[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedResponseInfo

# Class: SerpGoogleOrganicLiveAdvancedResponseInfo

Defined in: main.ts:42760

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleOrganicLiveAdvancedResponseInfo**(`data`?): `SerpGoogleOrganicLiveAdvancedResponseInfo`

Defined in: main.ts:42766

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Returns

`SerpGoogleOrganicLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:42762

array of tasks

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42770

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

Defined in: main.ts:42792

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleOrganicLiveAdvancedResponseInfo`

Defined in: main.ts:42785

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleOrganicLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
