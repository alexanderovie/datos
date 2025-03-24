[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTasksReadyResultInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResultInfo

Defined in: main.ts:238282

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTrustpilotReviewsTasksReadyResultInfo**(`data`?): `BusinessDataTrustpilotReviewsTasksReadyResultInfo`

Defined in: main.ts:238300

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Returns

`BusinessDataTrustpilotReviewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:238292

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:238296

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:238285

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:238288

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:238290

search engine type

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:238294

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:238309

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:238331

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTrustpilotReviewsTasksReadyResultInfo`

Defined in: main.ts:238324

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTrustpilotReviewsTasksReadyResultInfo`
