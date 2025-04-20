[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingSerpMerchantSerpElementItem

# Class: GoogleShoppingSerpMerchantSerpElementItem

Defined in: main.ts:198402

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleShoppingSerpMerchantSerpElementItem**(`data?`): `GoogleShoppingSerpMerchantSerpElementItem`

Defined in: main.ts:198477

#### Parameters

##### data?

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

#### Returns

`GoogleShoppingSerpMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22874

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

Defined in: main.ts:198447

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`additional_specifications`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:198429

currency in the ISO format
example:
USD

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`currency`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#currency)

***

### data\_docid?

> `optional` **data\_docid**: `string`

Defined in: main.ts:198441

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`data_docid`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#data_docid)

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

Defined in: main.ts:198470

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`delivery_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:198410

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:198406

domain in SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#domain)

***

### is\_best\_match?

> `optional` **is\_best\_match**: `boolean`

Defined in: main.ts:198455

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`is_best_match`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)

***

### old\_price?

> `optional` **old\_price**: `number`

Defined in: main.ts:198425

product old price
displayed if the product price has been changed
example:
499

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`old_price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#old_price)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22872

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:198420

product price
example:
384.99

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#price)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:198436

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_id`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_id)

***

### product\_images?

> `optional` **product\_images**: `string`[]

Defined in: main.ts:198464

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_images`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_images)

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:198458

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_rating)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22868

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22865

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:198451

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)

***

### seller?

> `optional` **seller**: `string`

Defined in: main.ts:198444

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`seller`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#seller)

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:198467

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)

***

### shop\_rating?

> `optional` **shop\_rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:198461

shop rating
the popularity rate of the seller based on user reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)

***

### shopping\_url?

> `optional` **shopping\_url**: `string`

Defined in: main.ts:198414

URL to the product page on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shopping_url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

Defined in: main.ts:198473

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`stores_count_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:198416

tags assigned to the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`tags`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198408

title of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22862

type of element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`type`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:198412

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:198404

XPath of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:198482

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:198535

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleShoppingSerpMerchantSerpElementItem`

Defined in: main.ts:198528

#### Parameters

##### data

`any`

#### Returns

`GoogleShoppingSerpMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
