[**Documentation**](../README.md)

***

[Documentation](../README.md) / IProductInfoElementMerchantSerpElementItem

# Interface: IProductInfoElementMerchantSerpElementItem

Defined in: main.ts:202379

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:202386

description of the product

***

### features?

> `optional` **features**: `string`[]

Defined in: main.ts:202395

product features
contains snippets with the description of product features

***

### images?

> `optional` **images**: `string`[]

Defined in: main.ts:202392

product images
contains urls to product images

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22957

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:202382

product_id received in a POST array
ilearn more about the parameter in this help center guide

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22953

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22950

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:202398

product rating 
the popularity rate based on reviews

***

### seller\_reviews\_count?

> `optional` **seller\_reviews\_count**: `number`

Defined in: main.ts:202401

number of seller reviews
number of reviews on the product seller’s account

***

### sellers?

> `optional` **sellers**: [`ProductSeller`](../classes/ProductSeller.md)[]

Defined in: main.ts:202404

sellers of the product
number of reviews on the product seller’s account

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:202384

title of the product

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22947

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:202389

product url
url of the product on Google Shopping

***

### variations?

> `optional` **variations**: [`ProductVariation`](../classes/ProductVariation.md)[]

Defined in: main.ts:202407

variations of the product
contains brief information about different product variations
