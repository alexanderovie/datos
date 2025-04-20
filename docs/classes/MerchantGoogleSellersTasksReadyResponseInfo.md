[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTasksReadyResponseInfo

# Class: MerchantGoogleSellersTasksReadyResponseInfo

Defined in: main.ts:200047

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersTasksReadyResponseInfo**(`data?`): `MerchantGoogleSellersTasksReadyResponseInfo`

Defined in: main.ts:200053

#### Parameters

##### data?

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md)

#### Returns

`MerchantGoogleSellersTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)[]

Defined in: main.ts:200049

array of tasks

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResponseInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleSellersTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:200057

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

Defined in: main.ts:200079

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersTasksReadyResponseInfo`

Defined in: main.ts:200072

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
