[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseYoutubeSerpElementItem

# Interface: IBaseYoutubeSerpElementItem

Defined in: main.ts:73500

## Extended by

- [`IYoutubeVideoInfoSerpElementItem`](IYoutubeVideoInfoSerpElementItem.md)
- [`IYoutubeSubtitlesSerpElementItem`](IYoutubeSubtitlesSerpElementItem.md)
- [`IYoutubeCommentSerpElementItem`](IYoutubeCommentSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:73509

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:73506

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:73502

type of element
