[**Documentation**](../README.md)

***

[Documentation](../README.md) / YoutubeCommentSerpElementItem

# Class: YoutubeCommentSerpElementItem

Defined in: main.ts:76668

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new YoutubeCommentSerpElementItem**(`data`?): `YoutubeCommentSerpElementItem`

Defined in: main.ts:76691

#### Parameters

##### data?

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

#### Returns

`YoutubeCommentSerpElementItem`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:73336

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

***

### author\_name?

> `optional` **author\_name**: `string`

Defined in: main.ts:76670

name of the author of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_name`](../interfaces/IYoutubeCommentSerpElementItem.md#author_name)

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

Defined in: main.ts:76672

the URL of the page where the author’s channel logo is hosted

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_thumbnail`](../interfaces/IYoutubeCommentSerpElementItem.md#author_thumbnail)

***

### author\_url?

> `optional` **author\_url**: `string`

Defined in: main.ts:76674

URL of the author’s channel

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_url`](../interfaces/IYoutubeCommentSerpElementItem.md#author_url)

***

### likes\_count?

> `optional` **likes\_count**: `number`

Defined in: main.ts:76685

number of likes on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeCommentSerpElementItem.md#likes_count)

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:76678

displayed publication date

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeCommentSerpElementItem.md#publication_date)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:73334

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:73331

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

***

### reply\_count?

> `optional` **reply\_count**: `number`

Defined in: main.ts:76687

number of replies on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`reply_count`](../interfaces/IYoutubeCommentSerpElementItem.md#reply_count)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:76676

text of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`text`](../interfaces/IYoutubeCommentSerpElementItem.md#text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:76683

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`timestamp`](../interfaces/IYoutubeCommentSerpElementItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:73327

type of element

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`type`](../interfaces/IYoutubeCommentSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76696

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76721

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `YoutubeCommentSerpElementItem`

Defined in: main.ts:76714

#### Parameters

##### data

`any`

#### Returns

`YoutubeCommentSerpElementItem`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)
