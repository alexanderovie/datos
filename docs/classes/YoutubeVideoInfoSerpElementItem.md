[**Documentation**](../README.md)

***

[Documentation](../README.md) / YoutubeVideoInfoSerpElementItem

# Class: YoutubeVideoInfoSerpElementItem

Defined in: main.ts:73512

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new YoutubeVideoInfoSerpElementItem**(`data?`): `YoutubeVideoInfoSerpElementItem`

Defined in: main.ts:73565

#### Parameters

##### data?

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md)

#### Returns

`YoutubeVideoInfoSerpElementItem`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:73448

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:73549

the category the video belongs to

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`category`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#category)

***

### channel\_id?

> `optional` **channel\_id**: `string`

Defined in: main.ts:73522

the ID of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_id`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_id)

***

### channel\_logo?

> `optional` **channel\_logo**: `string`

Defined in: main.ts:73528

the URL of the page where the logo image of the channel is hosted

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_logo`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_logo)

***

### channel\_name?

> `optional` **channel\_name**: `string`

Defined in: main.ts:73524

the name of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_name`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_name)

***

### channel\_subscribers\_count?

> `optional` **channel\_subscribers\_count**: [`ChannelSubscribersCount`](ChannelSubscribersCount.md)

Defined in: main.ts:73538

number of subscribers of the channel

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_subscribers_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_subscribers_count)

***

### channel\_url?

> `optional` **channel\_url**: `string`

Defined in: main.ts:73526

the URL of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_url)

***

### comments\_count?

> `optional` **comments\_count**: `number`

Defined in: main.ts:73536

number of comments on the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`comments_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#comments_count)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:73530

description of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`description`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#description)

***

### duration\_time?

> `optional` **duration\_time**: `string`

Defined in: main.ts:73555

duration of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time)

***

### duration\_time\_seconds?

> `optional` **duration\_time\_seconds**: `number`

Defined in: main.ts:73557

duration of the video in seconds

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`duration_time_seconds`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time_seconds)

***

### is\_embeddable?

> `optional` **is\_embeddable**: `boolean`

Defined in: main.ts:73553

indicates whether the video is embeddable

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`is_embeddable`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_embeddable)

***

### is\_live?

> `optional` **is\_live**: `boolean`

Defined in: main.ts:73551

indicates whether the video is on live

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`is_live`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_live)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:73547

keywords relevant to the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`keywords`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#keywords)

***

### likes\_count?

> `optional` **likes\_count**: `number`

Defined in: main.ts:73534

number of likes on the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#likes_count)

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:73540

the date when the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#publication_date)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:73446

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:73443

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

***

### streaming\_quality?

> `optional` **streaming\_quality**: [`StreamingQualityElement`](StreamingQualityElement.md)[]

Defined in: main.ts:73561

array of elements that contain information about all possible streaming qualities of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`streaming_quality`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#streaming_quality)

***

### subtitles?

> `optional` **subtitles**: [`Subtitles`](Subtitles.md)[]

Defined in: main.ts:73559

array of elements describing properties of subtitles in the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`subtitles`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#subtitles)

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

Defined in: main.ts:73520

the URL of the page where the thumbnail is hosted

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`thumbnail_url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#thumbnail_url)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:73545

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`timestamp`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:73516

title of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`title`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:73439

type of element

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`type`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:73518

URL of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#url)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:73514

ID of the video received in a POST array

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`video_id`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#video_id)

***

### views\_count?

> `optional` **views\_count**: `number`

Defined in: main.ts:73532

number of views of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`views_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#views_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:73570

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:73622

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `YoutubeVideoInfoSerpElementItem`

Defined in: main.ts:73615

#### Parameters

##### data

`any`

#### Returns

`YoutubeVideoInfoSerpElementItem`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)
