[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonPaidSerpElementItem

# Interface: IAmazonAmazonPaidSerpElementItem

Defined in: main.ts:201799

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:201809

number of product purchases in the past month

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:201821

currency in the ISO format
example:
USD

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:201829

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

Defined in: main.ts:201840

delivery information
delivery information including free and fast delivery date ranges

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:201801

Amazon domain

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:201807

URL of the product image featured in the results

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:201834

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:201837

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:201813

the regular price of a product
example:
49.98

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:201817

the upper limit of the product price range
example:
384.99

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24115

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24112

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:201831

product rating info

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:201824

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:201803

product title

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24109

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:201805

the URL of the product page

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24117

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
