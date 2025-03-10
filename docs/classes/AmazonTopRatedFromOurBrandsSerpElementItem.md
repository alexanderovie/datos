[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonTopRatedFromOurBrandsSerpElementItem

# Class: AmazonTopRatedFromOurBrandsSerpElementItem

Defined in: main.ts:202151

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonTopRatedFromOurBrandsSerpElementItem()

> **new AmazonTopRatedFromOurBrandsSerpElementItem**(`data`?): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

Defined in: main.ts:202161

#### Parameters

##### data?

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24023

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Defined in: main.ts:202157

Amazon product items

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`items`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:202155

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`position`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24019

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24016

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24013

type of element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`type`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24021

the XPath of the element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`xpath`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202166

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

Defined in: main.ts:202189

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

Defined in: main.ts:202182

#### Parameters

##### data

`any`

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
