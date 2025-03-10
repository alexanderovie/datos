[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTasksReadyResultInfo

Defined in: main.ts:74285

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:74295

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:74303

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:74306

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:74300

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:74288

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:74290

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:74293

type of search engine
example: video_subtitles

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:74297

user-defined task identifier
