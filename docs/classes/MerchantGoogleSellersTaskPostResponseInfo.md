[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskPostResponseInfo

# Class: MerchantGoogleSellersTaskPostResponseInfo

Defined in: main.ts:199847

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersTaskPostResponseInfo**(`data?`): `MerchantGoogleSellersTaskPostResponseInfo`

Defined in: main.ts:199853

#### Parameters

##### data?

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md)

#### Returns

`MerchantGoogleSellersTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)[]

Defined in: main.ts:199849

array of tasks

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:199857

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

Defined in: main.ts:199879

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersTaskPostResponseInfo`

Defined in: main.ts:199872

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersTaskPostResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
