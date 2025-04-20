[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksFixedResultInfo

# Class: SerpGoogleJobsTasksFixedResultInfo

Defined in: main.ts:57240

## Implements

- [`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleJobsTasksFixedResultInfo**(`data?`): `SerpGoogleJobsTasksFixedResultInfo`

Defined in: main.ts:57265

#### Parameters

##### data?

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md)

#### Returns

`SerpGoogleJobsTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:57250

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:57258

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:57261

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:57255

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:57243

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:57245

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:57248

type of search engine
can take the following values: jobs

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:57252

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksFixedResultInfo`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:57274

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:57298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleJobsTasksFixedResultInfo`

Defined in: main.ts:57291

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleJobsTasksFixedResultInfo`
