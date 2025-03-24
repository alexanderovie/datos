[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsElement

# Class: ProductConsiderationsElement

Defined in: main.ts:39339

## Implements

- [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductConsiderationsElement**(`data`?): `ProductConsiderationsElement`

Defined in: main.ts:39352

#### Parameters

##### data?

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

#### Returns

`ProductConsiderationsElement`

## Properties

### consideration\_category?

> `optional` **consideration\_category**: `string`

Defined in: main.ts:39346

category of the consideration element
the category is indicated just above the title fo the consideration element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`consideration_category`](../interfaces/IProductConsiderationsElement.md#consideration_category)

***

### expanded\_element?

> `optional` **expanded\_element**: [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

Defined in: main.ts:39348

expanded element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`expanded_element`](../interfaces/IProductConsiderationsElement.md#expanded_element)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:39343

title of a given link element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`title`](../interfaces/IProductConsiderationsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:39341

type of element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`type`](../interfaces/IProductConsiderationsElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39361

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:39381

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ProductConsiderationsElement`

Defined in: main.ts:39374

#### Parameters

##### data

`any`

#### Returns

`ProductConsiderationsElement`
