[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShopsListMerchantSerpElementItem

# Class: ShopsListMerchantSerpElementItem

Defined in: main.ts:199572

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ShopsListMerchantSerpElementItem**(`data`?): `ShopsListMerchantSerpElementItem`

Defined in: main.ts:199620

#### Parameters

##### data?

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

#### Returns

`ShopsListMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22866

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### base\_price?

> `optional` **base\_price**: `number`

Defined in: main.ts:199586

product price without tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`base_price`](../interfaces/IShopsListMerchantSerpElementItem.md#base_price)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:199597

currency in the ISO format
example:
USD

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`currency`](../interfaces/IShopsListMerchantSerpElementItem.md#currency)

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:199584

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`details`](../interfaces/IShopsListMerchantSerpElementItem.md#details)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:199576

domain in SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`domain`](../interfaces/IShopsListMerchantSerpElementItem.md#domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22864

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`position`](../interfaces/IShopsListMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### price\_multiplier?

> `optional` **price\_multiplier**: `number`

Defined in: main.ts:199600

monthly price multiplier
indicates the number of months covered by the monthly payment for the product

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`price_multiplier`](../interfaces/IShopsListMerchantSerpElementItem.md#price_multiplier)

***

### product\_annotation?

> `optional` **product\_annotation**: `string`

Defined in: main.ts:199616

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_annotation`](../interfaces/IShopsListMerchantSerpElementItem.md#product_annotation)

***

### product\_condition?

> `optional` **product\_condition**: `string`

Defined in: main.ts:199612

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_condition`](../interfaces/IShopsListMerchantSerpElementItem.md#product_condition)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22860

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22857

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:199606

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rating`](../interfaces/IShopsListMerchantSerpElementItem.md#rating)

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:199603

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`seller_name`](../interfaces/IShopsListMerchantSerpElementItem.md#seller_name)

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

Defined in: main.ts:199591

product shipping price

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IShopsListMerchantSerpElementItem.md#shipping_price)

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:199609

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IShopsListMerchantSerpElementItem.md#shop_ad_aclk)

***

### tax?

> `optional` **tax**: `number`

Defined in: main.ts:199589

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`tax`](../interfaces/IShopsListMerchantSerpElementItem.md#tax)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:199578

product title

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`title`](../interfaces/IShopsListMerchantSerpElementItem.md#title)

***

### total\_price?

> `optional` **total\_price**: `number`

Defined in: main.ts:199593

product price including tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`total_price`](../interfaces/IShopsListMerchantSerpElementItem.md#total_price)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22854

type of element

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`type`](../interfaces/IShopsListMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:199581

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`url`](../interfaces/IShopsListMerchantSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:199574

XPath of the element

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`xpath`](../interfaces/IShopsListMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199625

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199658

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ShopsListMerchantSerpElementItem`

Defined in: main.ts:199651

#### Parameters

##### data

`any`

#### Returns

`ShopsListMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
