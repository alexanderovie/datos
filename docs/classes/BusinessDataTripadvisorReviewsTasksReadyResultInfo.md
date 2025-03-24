[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTasksReadyResultInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyResultInfo

Defined in: main.ts:240750

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTripadvisorReviewsTasksReadyResultInfo**(`data`?): `BusinessDataTripadvisorReviewsTasksReadyResultInfo`

Defined in: main.ts:240768

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Returns

`BusinessDataTripadvisorReviewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:240760

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:240764

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:240753

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:240756

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:240758

search engine type

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:240762

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:240777

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:240799

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTripadvisorReviewsTasksReadyResultInfo`

Defined in: main.ts:240792

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTripadvisorReviewsTasksReadyResultInfo`
