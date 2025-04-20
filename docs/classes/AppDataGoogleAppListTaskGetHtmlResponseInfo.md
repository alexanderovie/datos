[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppListTaskGetHtmlResponseInfo

Defined in: main.ts:213713

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGoogleAppListTaskGetHtmlResponseInfo**(`data?`): `AppDataGoogleAppListTaskGetHtmlResponseInfo`

Defined in: main.ts:213719

#### Parameters

##### data?

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md)

#### Returns

`AppDataGoogleAppListTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleAppListTaskGetHtmlTaskInfo`](AppDataGoogleAppListTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:213715

array of tasks

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:213723

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

Defined in: main.ts:213745

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGoogleAppListTaskGetHtmlResponseInfo`

Defined in: main.ts:213738

#### Parameters

##### data

`any`

#### Returns

`AppDataGoogleAppListTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
