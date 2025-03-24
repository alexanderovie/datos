[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTasksReadyResponseInfo

# Class: MerchantAmazonProductsTasksReadyResponseInfo

Defined in: main.ts:204039

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonProductsTasksReadyResponseInfo**(`data`?): `MerchantAmazonProductsTasksReadyResponseInfo`

Defined in: main.ts:204045

#### Parameters

##### data?

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md)

#### Returns

`MerchantAmazonProductsTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonProductsTasksReadyTaskInfo`](MerchantAmazonProductsTasksReadyTaskInfo.md)[]

Defined in: main.ts:204041

array of tasks

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResponseInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonProductsTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204049

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

Defined in: main.ts:204071

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonProductsTasksReadyResponseInfo`

Defined in: main.ts:204064

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonProductsTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
