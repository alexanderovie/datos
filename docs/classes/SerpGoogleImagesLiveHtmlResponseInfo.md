[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveHtmlResponseInfo

# Class: SerpGoogleImagesLiveHtmlResponseInfo

Defined in: main.ts:54888

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveHtmlResponseInfo()

> **new SerpGoogleImagesLiveHtmlResponseInfo**(`data`?): [`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)

Defined in: main.ts:54894

#### Parameters

##### data?

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md)

#### Returns

[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesLiveHtmlTaskInfo`](SerpGoogleImagesLiveHtmlTaskInfo.md)[]

Defined in: main.ts:54890

array of tasks

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResponseInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54898

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

Defined in: main.ts:54920

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)

Defined in: main.ts:54913

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
