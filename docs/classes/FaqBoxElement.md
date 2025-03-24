[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBoxElement

# Class: FaqBoxElement

Defined in: main.ts:33285

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new FaqBoxElement**(`data`?): `FaqBoxElement`

Defined in: main.ts:33297

#### Parameters

##### data?

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

`FaqBoxElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:33291

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:33293

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33289

reference page title

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33287

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33306

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:33330

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `FaqBoxElement`

Defined in: main.ts:33323

#### Parameters

##### data

`any`

#### Returns

`FaqBoxElement`
