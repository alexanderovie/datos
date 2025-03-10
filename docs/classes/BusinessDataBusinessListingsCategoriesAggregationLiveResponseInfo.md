[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo

Defined in: main.ts:221740

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo()

> **new BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

Defined in: main.ts:221746

#### Parameters

##### data?

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)[]

Defined in: main.ts:221742

array of tasks

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221750

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

Defined in: main.ts:221772

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

Defined in: main.ts:221765

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
