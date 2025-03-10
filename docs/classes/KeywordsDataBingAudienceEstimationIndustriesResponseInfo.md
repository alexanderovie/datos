[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationIndustriesResponseInfo

# Class: KeywordsDataBingAudienceEstimationIndustriesResponseInfo

Defined in: main.ts:149672

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationIndustriesResponseInfo()

> **new KeywordsDataBingAudienceEstimationIndustriesResponseInfo**(`data`?): [`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

Defined in: main.ts:149678

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingAudienceEstimationIndustriesTaskInfo`](KeywordsDataBingAudienceEstimationIndustriesTaskInfo.md)[]

Defined in: main.ts:149674

array of tasks

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IKeywordsDataBingAudienceEstimationIndustriesResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingAudienceEstimationIndustriesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149682

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

Defined in: main.ts:149704

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

Defined in: main.ts:149697

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
