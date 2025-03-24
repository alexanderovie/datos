[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksFixedResultInfo

# Class: SerpYoutubeVideoCommentsTasksFixedResultInfo

Defined in: main.ts:76456

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoCommentsTasksFixedResultInfo**(`data`?): `SerpYoutubeVideoCommentsTasksFixedResultInfo`

Defined in: main.ts:76481

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Returns

`SerpYoutubeVideoCommentsTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:76466

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:76474

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:76477

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:76471

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:76459

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:76461

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:76464

type of search engine
can take the following values: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:76468

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76490

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76514

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoCommentsTasksFixedResultInfo`

Defined in: main.ts:76507

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoCommentsTasksFixedResultInfo`
