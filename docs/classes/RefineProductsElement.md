[**Documentation**](../README.md)

***

[Documentation](../README.md) / RefineProductsElement

# Class: RefineProductsElement

Defined in: main.ts:39328

## Implements

- [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RefineProductsElement()

> **new RefineProductsElement**(`data`?): [`RefineProductsElement`](RefineProductsElement.md)

Defined in: main.ts:39345

#### Parameters

##### data?

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:39335

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`image_url`](../interfaces/IRefineProductsElement.md#image_url)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:39337

keyword for the related refined search

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`keyword`](../interfaces/IRefineProductsElement.md#keyword)

***

### refine\_type?

> `optional` **refine\_type**: `string`

Defined in: main.ts:39339

type of search refinement

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`refine_type`](../interfaces/IRefineProductsElement.md#refine_type)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:39332

title of a given link element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`title`](../interfaces/IRefineProductsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:39330

type of element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`type`](../interfaces/IRefineProductsElement.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:39341

the XPath of the element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`xpath`](../interfaces/IRefineProductsElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39354

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:39376

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RefineProductsElement`](RefineProductsElement.md)

Defined in: main.ts:39369

#### Parameters

##### data

`any`

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)
