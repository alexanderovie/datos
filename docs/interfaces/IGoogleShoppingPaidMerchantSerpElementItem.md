[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleShoppingPaidMerchantSerpElementItem

# Interface: IGoogleShoppingPaidMerchantSerpElementItem

Defined in: main.ts:198190

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:198198

description of the product in Google Shopping SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:198194

domain in SERP

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

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:198203

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198196

product title

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

Defined in: main.ts:198200

URL to the product page on the seller’s website

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:198192

XPath of the element
