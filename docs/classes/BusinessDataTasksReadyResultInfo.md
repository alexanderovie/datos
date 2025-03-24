[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTasksReadyResultInfo

# Class: BusinessDataTasksReadyResultInfo

Defined in: main.ts:225298

## Implements

- [`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTasksReadyResultInfo**(`data`?): `BusinessDataTasksReadyResultInfo`

Defined in: main.ts:225316

#### Parameters

##### data?

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

#### Returns

`BusinessDataTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:225308

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:225312

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:225301

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:225304

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:225306

search engine type

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:225310

user-defined task identifier

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225325

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:225347

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTasksReadyResultInfo`

Defined in: main.ts:225340

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTasksReadyResultInfo`
