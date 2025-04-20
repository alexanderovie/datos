[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetHtmlResponseInfo

# Class: MerchantAmazonAsinTaskGetHtmlResponseInfo

Defined in: main.ts:207659

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonAsinTaskGetHtmlResponseInfo**(`data?`): `MerchantAmazonAsinTaskGetHtmlResponseInfo`

Defined in: main.ts:207665

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md)

#### Returns

`MerchantAmazonAsinTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:207661

array of tasks

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`time`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[`version`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:207669

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

Defined in: main.ts:207691

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonAsinTaskGetHtmlResponseInfo`

Defined in: main.ts:207684

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonAsinTaskGetHtmlResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
