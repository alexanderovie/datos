[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleShoppingSerpMerchantSerpElementItem

# Interface: IGoogleShoppingSerpMerchantSerpElementItem

Defined in: main.ts:198052

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

Defined in: main.ts:198097

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index Signature

\[`key`: `string`\]: `string`

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:198079

currency in the ISO format
example:
USD

***

### data\_docid?

> `optional` **data\_docid**: `string`

Defined in: main.ts:198091

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

Defined in: main.ts:198120

delivery information
delivery information including free and fast delivery date ranges

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:198060

description of the product in Google Shopping SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:198056

domain in SERP

***

### is\_best\_match?

> `optional` **is\_best\_match**: `boolean`

Defined in: main.ts:198105

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

***

### old\_price?

> `optional` **old\_price**: `number`

Defined in: main.ts:198075

product old price
displayed if the product price has been changed
example:
499

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

### price?

> `optional` **price**: `number`

Defined in: main.ts:198070

product price
example:
384.99

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:198086

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

***

### product\_images?

> `optional` **product\_images**: `string`[]

Defined in: main.ts:198114

URLs to the images of the product
the first URL in the array is the featured image of the product

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:198108

product rating
the product popularity rate based on product reviews

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

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:198101

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

***

### seller?

> `optional` **seller**: `string`

Defined in: main.ts:198094

name of the seller
the name of the company that placed a corresponding product on Google Shopping

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:198117

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

***

### shop\_rating?

> `optional` **shop\_rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:198111

shop rating
the popularity rate of the seller based on user reviews

***

### shopping\_url?

> `optional` **shopping\_url**: `string`

Defined in: main.ts:198064

URL to the product page on Google Shopping

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

Defined in: main.ts:198123

stores count information
contains information about the number of stores that offer the same product

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:198066

tags assigned to the product

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198058

title of the element

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

Defined in: main.ts:198062

URL to the product page on the seller’s website

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:198054

XPath of the element
