[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonSerpSerpElementItem

# Interface: IAmazonAmazonSerpSerpElementItem

Defined in: main.ts:122583

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:122598

ASIN of the product
learn more about ASIN in this help center guide

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:122629

number of product purchases in the past month

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:122612

currency in the ISO format
example:
USD

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:122636

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

Defined in: main.ts:122627

delivery information
delivery information including free and fast delivery date ranges

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:122631

description of the product

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:122591

Amazon domain

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:122600

URL of the product image featured in the results

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:122621

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:122618

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:122589

the alignment of the element in Amazon SERP
can take the following values:
left, right

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:122604

the regular price of a product
example:
49.98

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:122608

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

Defined in: main.ts:122624

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122585

search engine type

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:122615

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:122593

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

Defined in: main.ts:122595

URL of the product page

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24117

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
