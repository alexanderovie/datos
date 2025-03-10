[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShoppingElement

# Class: ShoppingElement

Defined in: main.ts:35212

## Implements

- [`IShoppingElement`](../interfaces/IShoppingElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ShoppingElement()

> **new ShoppingElement**(`data`?): [`ShoppingElement`](ShoppingElement.md)

Defined in: main.ts:35240

#### Parameters

##### data?

[`IShoppingElement`](../interfaces/IShoppingElement.md)

#### Returns

[`ShoppingElement`](ShoppingElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:35223

description

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`description`](../interfaces/IShoppingElement.md#description)

***

### marketplace?

> `optional` **marketplace**: `string`

Defined in: main.ts:35228

merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace`](../interfaces/IShoppingElement.md#marketplace)

***

### marketplace\_url?

> `optional` **marketplace\_url**: `string`

Defined in: main.ts:35231

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace_url`](../interfaces/IShoppingElement.md#marketplace_url)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:35218

price indicated in the element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`price`](../interfaces/IShoppingElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:35236

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`rating`](../interfaces/IShoppingElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:35221

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`source`](../interfaces/IShoppingElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35216

title of a given link element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`title`](../interfaces/IShoppingElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35214

type of element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`type`](../interfaces/IShoppingElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35233

URL

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`url`](../interfaces/IShoppingElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35249

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35274

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingElement`](ShoppingElement.md)

Defined in: main.ts:35267

#### Parameters

##### data

`any`

#### Returns

[`ShoppingElement`](ShoppingElement.md)
