[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResultInfo

Defined in: main.ts:228492

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleHotelSearchesTasksReadyResultInfo**(`data`?): `BusinessDataGoogleHotelSearchesTasksReadyResultInfo`

Defined in: main.ts:228510

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

#### Returns

`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:228502

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:228506

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:228495

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:228498

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:228500

search engine type

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:228504

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228519

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:228541

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleHotelSearchesTasksReadyResultInfo`

Defined in: main.ts:228534

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`
