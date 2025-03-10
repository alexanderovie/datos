[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetAdvancedResponseInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedResponseInfo

Defined in: main.ts:198842

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetAdvancedResponseInfo()

> **new MerchantGoogleProductSpecTaskGetAdvancedResponseInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:198848

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:198844

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198852

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

Defined in: main.ts:198874

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:198867

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
