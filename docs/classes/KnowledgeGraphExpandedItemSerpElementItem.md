[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedItemSerpElementItem

# Class: KnowledgeGraphExpandedItemSerpElementItem

Defined in: main.ts:32161

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphExpandedItemSerpElementItem**(`data`?): `KnowledgeGraphExpandedItemSerpElementItem`

Defined in: main.ts:32183

#### Parameters

##### data?

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

#### Returns

`KnowledgeGraphExpandedItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:32173

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)

***

### expanded\_element?

> `optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

Defined in: main.ts:32175

link of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:32165

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21984

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32179

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32169

title of the link

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:32167

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32188

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32215

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphExpandedItemSerpElementItem`

Defined in: main.ts:32208

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphExpandedItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
