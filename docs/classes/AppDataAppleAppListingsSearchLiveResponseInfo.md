[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListingsSearchLiveResponseInfo

# Class: AppDataAppleAppListingsSearchLiveResponseInfo

Defined in: main.ts:221611

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppListingsSearchLiveResponseInfo**(`data?`): `AppDataAppleAppListingsSearchLiveResponseInfo`

Defined in: main.ts:221617

#### Parameters

##### data?

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md)

#### Returns

`AppDataAppleAppListingsSearchLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`cost`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)[]

Defined in: main.ts:221613

array of tasks

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`time`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[`version`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:221621

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

Defined in: main.ts:221643

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppListingsSearchLiveResponseInfo`

Defined in: main.ts:221636

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppListingsSearchLiveResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
