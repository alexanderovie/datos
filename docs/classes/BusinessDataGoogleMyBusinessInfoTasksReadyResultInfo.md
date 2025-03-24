[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

Defined in: main.ts:225104

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo**(`data`?): `BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`

Defined in: main.ts:225122

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Returns

`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:225114

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:225118

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:225107

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:225110

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:225112

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:225116

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225131

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:225153

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`

Defined in: main.ts:225146

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`
