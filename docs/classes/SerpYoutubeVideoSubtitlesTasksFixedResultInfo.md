[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksFixedResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedResultInfo

Defined in: main.ts:74848

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoSubtitlesTasksFixedResultInfo**(`data`?): `SerpYoutubeVideoSubtitlesTasksFixedResultInfo`

Defined in: main.ts:74873

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Returns

`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:74858

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:74866

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:74869

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:74863

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:74851

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:74853

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:74856

type of search engine
can take the following values: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:74860

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74882

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74906

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoSubtitlesTasksFixedResultInfo`

Defined in: main.ts:74899

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`
