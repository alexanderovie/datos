[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingPaidMerchantSerpElementItem

# Class: GoogleShoppingPaidMerchantSerpElementItem

Defined in: main.ts:198128

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleShoppingPaidMerchantSerpElementItem**(`data`?): `GoogleShoppingPaidMerchantSerpElementItem`

Defined in: main.ts:198145

#### Parameters

##### data?

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

#### Returns

`GoogleShoppingPaidMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22866

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:198136

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:198132

domain in SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22864

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22860

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22857

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:198141

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198134

product title

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22854

type of element

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`type`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:198138

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:198130

XPath of the element

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198150

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

Defined in: main.ts:198173

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleShoppingPaidMerchantSerpElementItem`

Defined in: main.ts:198166

#### Parameters

##### data

`any`

#### Returns

`GoogleShoppingPaidMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
