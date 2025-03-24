[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTasksReadyResultInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResultInfo

Defined in: main.ts:239772

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTripadvisorSearchTasksReadyResultInfo**(`data`?): `BusinessDataTripadvisorSearchTasksReadyResultInfo`

Defined in: main.ts:239790

#### Parameters

##### data?

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Returns

`BusinessDataTripadvisorSearchTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:239782

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:239786

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:239775

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:239778

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:239780

search engine type

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:239784

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:239799

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:239821

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTripadvisorSearchTasksReadyResultInfo`

Defined in: main.ts:239814

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTripadvisorSearchTasksReadyResultInfo`
