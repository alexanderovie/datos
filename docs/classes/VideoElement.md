[**Documentation**](../README.md)

***

[Documentation](../README.md) / VideoElement

# Class: VideoElement

Defined in: main.ts:34950

## Implements

- [`IVideoElement`](../interfaces/IVideoElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new VideoElement()

> **new VideoElement**(`data`?): [`VideoElement`](VideoElement.md)

Defined in: main.ts:34968

#### Parameters

##### data?

[`IVideoElement`](../interfaces/IVideoElement.md)

#### Returns

[`VideoElement`](VideoElement.md)

## Properties

### source?

> `optional` **source**: `string`

Defined in: main.ts:34955

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`source`](../interfaces/IVideoElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:34962

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`timestamp`](../interfaces/IVideoElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34957

title of a given link element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`title`](../interfaces/IVideoElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34952

type of element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`type`](../interfaces/IVideoElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34964

URL

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`url`](../interfaces/IVideoElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34977

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34998

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`VideoElement`](VideoElement.md)

Defined in: main.ts:34991

#### Parameters

##### data

`any`

#### Returns

[`VideoElement`](VideoElement.md)
