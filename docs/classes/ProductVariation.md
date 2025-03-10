[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductVariation

# Class: ProductVariation

Defined in: main.ts:199781

## Implements

- [`IProductVariation`](../interfaces/IProductVariation.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductVariation()

> **new ProductVariation**(`data`?): [`ProductVariation`](ProductVariation.md)

Defined in: main.ts:199795

#### Parameters

##### data?

[`IProductVariation`](../interfaces/IProductVariation.md)

#### Returns

[`ProductVariation`](ProductVariation.md)

## Properties

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:199786

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`product_id`](../interfaces/IProductVariation.md#product_id)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:199788

name of the product seller

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`title`](../interfaces/IProductVariation.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:199783

type of element

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`type`](../interfaces/IProductVariation.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:199791

seller url
url of the webpage on the seller’s website where the product is sold

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`url`](../interfaces/IProductVariation.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199804

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199824

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductVariation`](ProductVariation.md)

Defined in: main.ts:199817

#### Parameters

##### data

`any`

#### Returns

[`ProductVariation`](ProductVariation.md)
