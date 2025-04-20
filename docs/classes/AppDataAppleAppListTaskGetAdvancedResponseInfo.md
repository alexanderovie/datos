[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppListTaskGetAdvancedResponseInfo

Defined in: main.ts:220053

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppListTaskGetAdvancedResponseInfo**(`data?`): `AppDataAppleAppListTaskGetAdvancedResponseInfo`

Defined in: main.ts:220059

#### Parameters

##### data?

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Returns

`AppDataAppleAppListTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:220055

array of tasks

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:220063

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:220085

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppListTaskGetAdvancedResponseInfo`

Defined in: main.ts:220078

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppListTaskGetAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
