[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

Defined in: main.ts:117104

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117116

#### Parameters

##### data?

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22230

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:117110

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### expanded\_element?

> `optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

Defined in: main.ts:117112

expanded element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117106

title of a given link element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117121

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:117145

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117138

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
