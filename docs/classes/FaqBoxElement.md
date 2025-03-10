[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBoxElement

# Class: FaqBoxElement

Defined in: main.ts:32858

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FaqBoxElement()

> **new FaqBoxElement**(`data`?): [`FaqBoxElement`](FaqBoxElement.md)

Defined in: main.ts:32870

#### Parameters

##### data?

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:32864

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:32866

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32862

reference page title

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32860

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32879

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32903

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

Defined in: main.ts:32896

#### Parameters

##### data

`any`

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)
