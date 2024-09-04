[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Defined in

main.ts:64020

***

### end\_time?

> `optional` **end\_time**: `number`

the second subtitled text ends

#### Defined in

main.ts:64018

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:62316

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:62313

***

### start\_time?

> `optional` **start\_time**: `number`

the second subtitled text starts

#### Defined in

main.ts:64016

***

### text?

> `optional` **text**: `string`

text translated in subtitles

#### Defined in

main.ts:64014

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:62309
