[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTasksFixedResultInfo

# Class: SerpYoutubeVideoInfoTasksFixedResultInfo

Defined in: main.ts:72480

## Implements

- [`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTasksFixedResultInfo()

> **new SerpYoutubeVideoInfoTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

Defined in: main.ts:72505

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:72490

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:72498

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:72501

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:72495

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:72483

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:72485

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:72488

type of search engine
can take the following values: video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:72492

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoInfoTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72514

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72538

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)

Defined in: main.ts:72531

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoTasksFixedResultInfo`](SerpYoutubeVideoInfoTasksFixedResultInfo.md)
