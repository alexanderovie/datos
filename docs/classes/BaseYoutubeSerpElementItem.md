[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseYoutubeSerpElementItem

# Class: BaseYoutubeSerpElementItem

Defined in: main.ts:73437

## Extended by

- [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)
- [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)
- [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

## Implements

- [`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

## Constructors

### Constructor

> **new BaseYoutubeSerpElementItem**(`data?`): `BaseYoutubeSerpElementItem`

Defined in: main.ts:73450

#### Parameters

##### data?

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

#### Returns

`BaseYoutubeSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:73448

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:73446

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:73443

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_group`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:73439

type of element

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`type`](../interfaces/IBaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:73460

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:73490

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseYoutubeSerpElementItem`

Defined in: main.ts:73468

#### Parameters

##### data

`any`

#### Returns

`BaseYoutubeSerpElementItem`
