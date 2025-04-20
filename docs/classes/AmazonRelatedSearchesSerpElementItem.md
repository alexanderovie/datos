[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonRelatedSearchesSerpElementItem

# Class: AmazonRelatedSearchesSerpElementItem

Defined in: main.ts:205024

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonRelatedSearchesSerpElementItem**(`data?`): `AmazonRelatedSearchesSerpElementItem`

Defined in: main.ts:205034

#### Parameters

##### data?

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

#### Returns

`AmazonRelatedSearchesSerpElementItem`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24370

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`RelatedSearchesElement`](RelatedSearchesElement.md)[]

Defined in: main.ts:205030

Amazon product items

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:205028

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24366

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24363

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24360

type of element

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24368

the XPath of the element

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:205039

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:205062

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonRelatedSearchesSerpElementItem`

Defined in: main.ts:205055

#### Parameters

##### data

`any`

#### Returns

`AmazonRelatedSearchesSerpElementItem`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
