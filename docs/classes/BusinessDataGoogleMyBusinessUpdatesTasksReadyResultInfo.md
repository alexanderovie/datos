[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

Defined in: main.ts:227800

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo**(`data?`): `BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`

Defined in: main.ts:227818

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:227810

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:227814

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:227803

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:227806

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:227808

search engine type

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:227812

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:227827

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:227849

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`

Defined in: main.ts:227842

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`
