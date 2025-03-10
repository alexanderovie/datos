[**Documentation**](../README.md)

***

[Documentation](../README.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

Defined in: main.ts:74686

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:74694

duration of subtitles in seconds

***

### end\_time?

> `optional` **end\_time**: `number`

Defined in: main.ts:74692

the second subtitled text ends

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:72970

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:72967

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

***

### start\_time?

> `optional` **start\_time**: `number`

Defined in: main.ts:74690

the second subtitled text starts

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:74688

text translated in subtitles

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:72963

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)
