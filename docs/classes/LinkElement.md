[**Documentation**](../README.md)

***

[Documentation](../README.md) / LinkElement

# Class: LinkElement

Defined in: main.ts:24669

## Implements

- [`ILinkElement`](../interfaces/ILinkElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LinkElement**(`data`?): `LinkElement`

Defined in: main.ts:24687

#### Parameters

##### data?

[`ILinkElement`](../interfaces/ILinkElement.md)

#### Returns

`LinkElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:24677

description of the results element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`description`](../interfaces/ILinkElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:24681

domain where a link points

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`domain`](../interfaces/ILinkElement.md#domain)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:24675

text alongside the link title

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`snippet`](../interfaces/ILinkElement.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24673

title of a given link element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`title`](../interfaces/ILinkElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24671

type of element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`type`](../interfaces/ILinkElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:24679

URL

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`url`](../interfaces/ILinkElement.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24683

the XPath of the element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`xpath`](../interfaces/ILinkElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24696

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24719

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `LinkElement`

Defined in: main.ts:24712

#### Parameters

##### data

`any`

#### Returns

`LinkElement`
