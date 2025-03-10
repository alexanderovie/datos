[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseVersionsResponseInfo

# Class: OnPageLighthouseVersionsResponseInfo

Defined in: main.ts:184644

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseVersionsResponseInfo()

> **new OnPageLighthouseVersionsResponseInfo**(`data`?): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

Defined in: main.ts:184650

#### Parameters

##### data?

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md)

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseVersionsTaskInfo`](OnPageLighthouseVersionsTaskInfo.md)[]

Defined in: main.ts:184646

array of tasks

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184654

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

Defined in: main.ts:184676

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

Defined in: main.ts:184669

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
