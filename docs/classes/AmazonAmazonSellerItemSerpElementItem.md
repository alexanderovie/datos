[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonSellerItemSerpElementItem

# Class: AmazonAmazonSellerItemSerpElementItem

Defined in: main.ts:207852

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonAmazonSellerItemSerpElementItem**(`data`?): `AmazonAmazonSellerItemSerpElementItem`

Defined in: main.ts:207881

#### Parameters

##### data?

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

#### Returns

`AmazonAmazonSellerItemSerpElementItem`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24362

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### condition?

> `optional` **condition**: `string`

Defined in: main.ts:207871

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition)

***

### condition\_description?

> `optional` **condition\_description**: `string`

Defined in: main.ts:207874

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition_description)

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:207877

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:207856

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:207865

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24358

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24355

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:207868

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rating)

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:207858

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_name)

***

### seller\_url?

> `optional` **seller\_url**: `string`

Defined in: main.ts:207860

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_url)

***

### ships\_from?

> `optional` **ships\_from**: `string`

Defined in: main.ts:207862

sender company name

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#ships_from)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24352

type of element

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24360

the XPath of the element

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207886

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207912

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonAmazonSellerItemSerpElementItem`

Defined in: main.ts:207905

#### Parameters

##### data

`any`

#### Returns

`AmazonAmazonSellerItemSerpElementItem`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
