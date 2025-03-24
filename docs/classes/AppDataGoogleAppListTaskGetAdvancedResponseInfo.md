[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetAdvancedResponseInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResponseInfo

Defined in: main.ts:212967

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGoogleAppListTaskGetAdvancedResponseInfo**(`data`?): `AppDataGoogleAppListTaskGetAdvancedResponseInfo`

Defined in: main.ts:212973

#### Parameters

##### data?

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

#### Returns

`AppDataGoogleAppListTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:212969

array of tasks

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212977

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

Defined in: main.ts:212999

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGoogleAppListTaskGetAdvancedResponseInfo`

Defined in: main.ts:212992

#### Parameters

##### data

`any`

#### Returns

`AppDataGoogleAppListTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
