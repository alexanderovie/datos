[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksReadyResultInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResultInfo

Defined in: main.ts:76244

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoCommentsTasksReadyResultInfo**(`data`?): `SerpYoutubeVideoCommentsTasksReadyResultInfo`

Defined in: main.ts:76269

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Returns

`SerpYoutubeVideoCommentsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:76254

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:76262

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:76265

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:76259

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:76247

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:76249

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:76252

type of search engine
example: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:76256

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76278

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76302

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoCommentsTasksReadyResultInfo`

Defined in: main.ts:76295

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoCommentsTasksReadyResultInfo`
