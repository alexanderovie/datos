[**Documentation**](../README.md)

***

[Documentation](../README.md) / AiOverviewElement

# Class: AiOverviewElement

Defined in: main.ts:32869

## Implements

- [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AiOverviewElement**(`data`?): `AiOverviewElement`

Defined in: main.ts:32883

#### Parameters

##### data?

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

#### Returns

`AiOverviewElement`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:32877

images of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`images`](../interfaces/IAiOverviewElement.md#images)

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

Defined in: main.ts:32879

references relevant to the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`references`](../interfaces/IAiOverviewElement.md#references)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:32875

description content

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`text`](../interfaces/IAiOverviewElement.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32873

title of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`title`](../interfaces/IAiOverviewElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32871

type of element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`type`](../interfaces/IAiOverviewElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32892

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32921

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AiOverviewElement`

Defined in: main.ts:32914

#### Parameters

##### data

`any`

#### Returns

`AiOverviewElement`
