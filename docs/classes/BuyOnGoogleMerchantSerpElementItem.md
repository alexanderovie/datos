[**Documentation**](../README.md)

***

[Documentation](../README.md) / BuyOnGoogleMerchantSerpElementItem

# Class: BuyOnGoogleMerchantSerpElementItem

Defined in: main.ts:200264

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BuyOnGoogleMerchantSerpElementItem**(`data?`): `BuyOnGoogleMerchantSerpElementItem`

Defined in: main.ts:200302

#### Parameters

##### data?

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

#### Returns

`BuyOnGoogleMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22874

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### base\_price?

> `optional` **base\_price**: `number`

Defined in: main.ts:200277

product price without tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`base_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#base_price)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:200288

currency in the ISO format
example:
USD

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`currency`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#currency)

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:200275

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`details`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#details)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:200268

domain in SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`domain`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22872

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`position`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22868

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22865

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:200294

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rating`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rating)

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:200291

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`seller_name`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#seller_name)

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

Defined in: main.ts:200282

product shipping price

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shipping_price)

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:200298

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shop_ad_aclk)

***

### tax?

> `optional` **tax**: `number`

Defined in: main.ts:200280

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`tax`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#tax)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:200270

product title

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`title`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#title)

***

### total\_price?

> `optional` **total\_price**: `number`

Defined in: main.ts:200284

product price including tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`total_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#total_price)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22862

type of element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`type`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:200272

Google Shopping URL forwarding to the product page

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`url`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:200266

XPath of the element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`xpath`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:200307

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

Defined in: main.ts:200337

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BuyOnGoogleMerchantSerpElementItem`

Defined in: main.ts:200330

#### Parameters

##### data

`any`

#### Returns

`BuyOnGoogleMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
