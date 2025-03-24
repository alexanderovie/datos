[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTasksReadyResultInfo

# Class: SerpGoogleJobsTasksReadyResultInfo

Defined in: main.ts:56914

## Implements

- [`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleJobsTasksReadyResultInfo**(`data`?): `SerpGoogleJobsTasksReadyResultInfo`

Defined in: main.ts:56939

#### Parameters

##### data?

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md)

#### Returns

`SerpGoogleJobsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:56924

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:56932

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:56935

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:56929

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:56917

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:56919

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:56922

type of search engine
example: jobs

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:56926

user-defined task identifier

#### Implementation of

[`ISerpGoogleJobsTasksReadyResultInfo`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:56948

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:56972

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleJobsTasksReadyResultInfo`

Defined in: main.ts:56965

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleJobsTasksReadyResultInfo`
