[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphLinkElementInfo

# Class: KnowledgeGraphLinkElementInfo

Defined in: main.ts:116326

## Implements

- [`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphLinkElementInfo**(`data`?): `KnowledgeGraphLinkElementInfo`

Defined in: main.ts:116342

#### Parameters

##### data?

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md)

#### Returns

`KnowledgeGraphLinkElementInfo`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:116334

domain in SERP

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`domain`](../interfaces/IKnowledgeGraphLinkElementInfo.md#domain)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:116336

text alongside the link title

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`snippet`](../interfaces/IKnowledgeGraphLinkElementInfo.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:116330

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`title`](../interfaces/IKnowledgeGraphLinkElementInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:116328

type of element

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`type`](../interfaces/IKnowledgeGraphLinkElementInfo.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:116332

sitelink URL

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`url`](../interfaces/IKnowledgeGraphLinkElementInfo.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:116338

the XPath of the element

#### Implementation of

[`IKnowledgeGraphLinkElementInfo`](../interfaces/IKnowledgeGraphLinkElementInfo.md).[`xpath`](../interfaces/IKnowledgeGraphLinkElementInfo.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116351

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:116373

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphLinkElementInfo`

Defined in: main.ts:116366

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphLinkElementInfo`
