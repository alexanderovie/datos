[**Documentation**](../README.md)

***

[Documentation](../README.md) / VideoElement

# Class: VideoElement

Defined in: main.ts:35385

## Implements

- [`IVideoElement`](../interfaces/IVideoElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new VideoElement**(`data?`): `VideoElement`

Defined in: main.ts:35403

#### Parameters

##### data?

[`IVideoElement`](../interfaces/IVideoElement.md)

#### Returns

`VideoElement`

## Properties

### source?

> `optional` **source**: `string`

Defined in: main.ts:35390

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`source`](../interfaces/IVideoElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:35397

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`timestamp`](../interfaces/IVideoElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35392

title of a given link element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`title`](../interfaces/IVideoElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35387

type of element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`type`](../interfaces/IVideoElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35399

URL

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`url`](../interfaces/IVideoElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:35412

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:35433

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `VideoElement`

Defined in: main.ts:35426

#### Parameters

##### data

`any`

#### Returns

`VideoElement`
