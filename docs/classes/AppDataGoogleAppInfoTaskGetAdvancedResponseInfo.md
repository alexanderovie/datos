[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskGetAdvancedResponseInfo

# Class: AppDataGoogleAppInfoTaskGetAdvancedResponseInfo

Defined in: main.ts:211868

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskGetAdvancedResponseInfo()

> **new AppDataGoogleAppInfoTaskGetAdvancedResponseInfo**(`data`?): [`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:211874

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppInfoTaskGetAdvancedTaskInfo`](AppDataGoogleAppInfoTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:211870

array of tasks

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211878

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

Defined in: main.ts:211900

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:211893

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
