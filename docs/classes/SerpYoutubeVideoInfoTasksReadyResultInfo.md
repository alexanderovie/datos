[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTasksReadyResultInfo

# Class: SerpYoutubeVideoInfoTasksReadyResultInfo

Defined in: main.ts:72695

## Implements

- [`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoInfoTasksReadyResultInfo**(`data`?): `SerpYoutubeVideoInfoTasksReadyResultInfo`

Defined in: main.ts:72720

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Returns

`SerpYoutubeVideoInfoTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:72705

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:72713

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:72716

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:72710

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:72698

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:72700

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:72703

type of search engine
example: video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:72707

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72729

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72753

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoInfoTasksReadyResultInfo`

Defined in: main.ts:72746

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoInfoTasksReadyResultInfo`
