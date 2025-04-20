[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataErrorsResponseInfo

# Class: KeywordsDataErrorsResponseInfo

Defined in: main.ts:137893

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataErrorsResponseInfo**(`data?`): `KeywordsDataErrorsResponseInfo`

Defined in: main.ts:137899

#### Parameters

##### data?

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md)

#### Returns

`KeywordsDataErrorsResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`cost`](../interfaces/IKeywordsDataErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataErrorsTaskInfo`](KeywordsDataErrorsTaskInfo.md)[]

Defined in: main.ts:137895

array of tasks

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`time`](../interfaces/IKeywordsDataErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md).[`version`](../interfaces/IKeywordsDataErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:137903

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

Defined in: main.ts:137925

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataErrorsResponseInfo`

Defined in: main.ts:137918

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataErrorsResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
