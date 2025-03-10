[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResponseInfo

Defined in: main.ts:215332

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskGetAdvancedResponseInfo()

> **new AppDataAppleAppSearchesTaskGetAdvancedResponseInfo**(`data`?): [`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:215338

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:215334

array of tasks

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215342

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

Defined in: main.ts:215364

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:215357

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
