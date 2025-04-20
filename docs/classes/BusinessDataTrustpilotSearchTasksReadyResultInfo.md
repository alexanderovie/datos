[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTasksReadyResultInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResultInfo

Defined in: main.ts:238056

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTrustpilotSearchTasksReadyResultInfo**(`data?`): `BusinessDataTrustpilotSearchTasksReadyResultInfo`

Defined in: main.ts:238074

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Returns

`BusinessDataTrustpilotSearchTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:238066

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:238070

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:238059

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:238062

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:238064

search engine type

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:238068

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:238083

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:238105

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTrustpilotSearchTasksReadyResultInfo`

Defined in: main.ts:238098

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTrustpilotSearchTasksReadyResultInfo`
