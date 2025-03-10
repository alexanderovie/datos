[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetHtmlResponseInfo

# Class: MerchantGoogleProductSpecTaskGetHtmlResponseInfo

Defined in: main.ts:199058

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetHtmlResponseInfo()

> **new MerchantGoogleProductSpecTaskGetHtmlResponseInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

Defined in: main.ts:199064

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTaskGetHtmlTaskInfo`](MerchantGoogleProductSpecTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:199060

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199068

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

Defined in: main.ts:199090

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

Defined in: main.ts:199083

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
