[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

# Class: SerpGoogleDatasetSearchTasksFixedResultInfo

Defined in: main.ts:59855

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTasksFixedResultInfo()

> **new SerpGoogleDatasetSearchTasksFixedResultInfo**(`data`?): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

Defined in: main.ts:59880

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:59865

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:59873

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:59876

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:59870

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:59858

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:59860

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:59863

type of search engine
can take the following values: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:59867

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59889

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59913

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)

Defined in: main.ts:59906

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResultInfo`](SerpGoogleDatasetSearchTasksFixedResultInfo.md)
