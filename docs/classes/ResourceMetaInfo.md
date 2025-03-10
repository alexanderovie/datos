[**Documentation**](../README.md)

***

[Documentation](../README.md) / ResourceMetaInfo

# Class: ResourceMetaInfo

Defined in: main.ts:177315

## Implements

- [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ResourceMetaInfo()

> **new ResourceMetaInfo**(`data`?): [`ResourceMetaInfo`](ResourceMetaInfo.md)

Defined in: main.ts:177332

#### Parameters

##### data?

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

## Properties

### alternative\_text?

> `optional` **alternative\_text**: `string`

Defined in: main.ts:177318

content of the image alt attribute
the value depends on the resource_type

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`alternative_text`](../interfaces/IResourceMetaInfo.md#alternative_text)

***

### height?

> `optional` **height**: `number`

Defined in: main.ts:177328

image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`height`](../interfaces/IResourceMetaInfo.md#height)

***

### original\_height?

> `optional` **original\_height**: `number`

Defined in: main.ts:177324

original image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_height`](../interfaces/IResourceMetaInfo.md#original_height)

***

### original\_width?

> `optional` **original\_width**: `number`

Defined in: main.ts:177322

original image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_width`](../interfaces/IResourceMetaInfo.md#original_width)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:177320

title

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`title`](../interfaces/IResourceMetaInfo.md#title)

***

### width?

> `optional` **width**: `number`

Defined in: main.ts:177326

image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`width`](../interfaces/IResourceMetaInfo.md#width)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177341

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177363

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

Defined in: main.ts:177356

#### Parameters

##### data

`any`

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)
