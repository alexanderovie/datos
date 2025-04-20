[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphImagesItemSerpElementItem

# Class: KnowledgeGraphImagesItemSerpElementItem

Defined in: main.ts:31687

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphImagesItemSerpElementItem**(`data?`): `KnowledgeGraphImagesItemSerpElementItem`

Defined in: main.ts:31705

#### Parameters

##### data?

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

#### Returns

`KnowledgeGraphImagesItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

Defined in: main.ts:31697

items featured in the faq_box

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:31695

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:31691

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31701

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31693

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:31710

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:31736

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphImagesItemSerpElementItem`

Defined in: main.ts:31729

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphImagesItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
