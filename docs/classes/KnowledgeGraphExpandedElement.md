[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedElement

# Class: KnowledgeGraphExpandedElement

Defined in: main.ts:32057

## Implements

- [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphExpandedElement**(`data?`): `KnowledgeGraphExpandedElement`

Defined in: main.ts:32082

#### Parameters

##### data?

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

#### Returns

`KnowledgeGraphExpandedElement`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:32065

domain in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`domain`](../interfaces/IKnowledgeGraphExpandedElement.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:32061

title of a given element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`featured_title`](../interfaces/IKnowledgeGraphExpandedElement.md#featured_title)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:32071

images of the element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`images`](../interfaces/IKnowledgeGraphExpandedElement.md#images)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:32069

text alongside the link title

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`snippet`](../interfaces/IKnowledgeGraphExpandedElement.md#snippet)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:32078

table element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`table`](../interfaces/IKnowledgeGraphExpandedElement.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:32076

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`timestamp`](../interfaces/IKnowledgeGraphExpandedElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32067

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`title`](../interfaces/IKnowledgeGraphExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32059

type of element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`type`](../interfaces/IKnowledgeGraphExpandedElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32063

relevant URL

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`url`](../interfaces/IKnowledgeGraphExpandedElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:32091

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:32120

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphExpandedElement`

Defined in: main.ts:32113

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphExpandedElement`
