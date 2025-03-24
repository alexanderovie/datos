[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleReviewsTasksReadyResultInfo

Defined in: main.ts:233656

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleReviewsTasksReadyResultInfo**(`data`?): `BusinessDataGoogleReviewsTasksReadyResultInfo`

Defined in: main.ts:233674

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Returns

`BusinessDataGoogleReviewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:233666

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:233670

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:233659

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:233662

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:233664

type of search engine

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:233668

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:233683

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:233705

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleReviewsTasksReadyResultInfo`

Defined in: main.ts:233698

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleReviewsTasksReadyResultInfo`
