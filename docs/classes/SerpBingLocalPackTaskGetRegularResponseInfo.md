[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetRegularResponseInfo

# Class: SerpBingLocalPackTaskGetRegularResponseInfo

Defined in: main.ts:70662

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingLocalPackTaskGetRegularResponseInfo**(`data?`): `SerpBingLocalPackTaskGetRegularResponseInfo`

Defined in: main.ts:70668

#### Parameters

##### data?

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Returns

`SerpBingLocalPackTaskGetRegularResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)[]

Defined in: main.ts:70664

array of tasks

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:70672

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

Defined in: main.ts:70694

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingLocalPackTaskGetRegularResponseInfo`

Defined in: main.ts:70687

#### Parameters

##### data

`any`

#### Returns

`SerpBingLocalPackTaskGetRegularResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
