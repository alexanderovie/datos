[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResultInfo

Defined in: main.ts:74748

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoSubtitlesTasksReadyResultInfo**(`data?`): `SerpYoutubeVideoSubtitlesTasksReadyResultInfo`

Defined in: main.ts:74773

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Returns

`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:74758

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:74766

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:74769

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:74763

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:74751

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:74753

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:74756

type of search engine
example: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:74760

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:74782

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:74806

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoSubtitlesTasksReadyResultInfo`

Defined in: main.ts:74799

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`
