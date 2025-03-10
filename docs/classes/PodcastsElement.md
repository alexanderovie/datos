[**Documentation**](../README.md)

***

[Documentation](../README.md) / PodcastsElement

# Class: PodcastsElement

Defined in: main.ts:36822

## Implements

- [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PodcastsElement()

> **new PodcastsElement**(`data`?): [`PodcastsElement`](PodcastsElement.md)

Defined in: main.ts:36841

#### Parameters

##### data?

[`IPodcastsElement`](../interfaces/IPodcastsElement.md)

#### Returns

[`PodcastsElement`](PodcastsElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:36830

description

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`description`](../interfaces/IPodcastsElement.md#description)

***

### time\_to\_play?

> `optional` **time\_to\_play**: `string`

Defined in: main.ts:36837

the total time it will take to play an episode

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`time_to_play`](../interfaces/IPodcastsElement.md#time_to_play)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:36835

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`timestamp`](../interfaces/IPodcastsElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36826

title of a given link element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`title`](../interfaces/IPodcastsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36824

type of element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`type`](../interfaces/IPodcastsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36828

URL

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`url`](../interfaces/IPodcastsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36850

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36872

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PodcastsElement`](PodcastsElement.md)

Defined in: main.ts:36865

#### Parameters

##### data

`any`

#### Returns

[`PodcastsElement`](PodcastsElement.md)
