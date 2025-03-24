[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTasksFixedResultInfo

# Class: SerpGoogleDatasetSearchTasksFixedResultInfo

Defined in: main.ts:60282

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleDatasetSearchTasksFixedResultInfo**(`data`?): `SerpGoogleDatasetSearchTasksFixedResultInfo`

Defined in: main.ts:60307

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md)

#### Returns

`SerpGoogleDatasetSearchTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:60292

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:60300

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:60303

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:60297

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:60285

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:60287

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:60290

type of search engine
can take the following values: dataset_search

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:60294

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetSearchTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60316

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60340

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleDatasetSearchTasksFixedResultInfo`

Defined in: main.ts:60333

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleDatasetSearchTasksFixedResultInfo`
