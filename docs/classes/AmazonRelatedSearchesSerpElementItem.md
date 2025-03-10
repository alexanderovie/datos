[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonRelatedSearchesSerpElementItem

# Class: AmazonRelatedSearchesSerpElementItem

Defined in: main.ts:202085

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonRelatedSearchesSerpElementItem()

> **new AmazonRelatedSearchesSerpElementItem**(`data`?): [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

Defined in: main.ts:202095

#### Parameters

##### data?

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

#### Returns

[`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

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

> `optional` **items**: [`RelatedSearchesElement`](RelatedSearchesElement.md)[]

Defined in: main.ts:202091

Amazon product items

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:202089

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24019

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24016

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24013

type of element

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24021

the XPath of the element

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202100

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

Defined in: main.ts:202123

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

Defined in: main.ts:202116

#### Parameters

##### data

`any`

#### Returns

[`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
