[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetAdvancedResponseInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResponseInfo

Defined in: main.ts:83225

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBaiduOrganicTaskGetAdvancedResponseInfo**(`data`?): `SerpBaiduOrganicTaskGetAdvancedResponseInfo`

Defined in: main.ts:83231

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Returns

`SerpBaiduOrganicTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTaskGetAdvancedTaskInfo`](SerpBaiduOrganicTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:83227

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83235

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

Defined in: main.ts:83257

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBaiduOrganicTaskGetAdvancedResponseInfo`

Defined in: main.ts:83250

#### Parameters

##### data

`any`

#### Returns

`SerpBaiduOrganicTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
