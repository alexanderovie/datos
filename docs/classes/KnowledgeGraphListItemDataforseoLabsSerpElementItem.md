[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphListItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphListItemDataforseoLabsSerpElementItem

Defined in: main.ts:118451

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphListItemDataforseoLabsSerpElementItem**(`data?`): `KnowledgeGraphListItemDataforseoLabsSerpElementItem`

Defined in: main.ts:118466

#### Parameters

##### data?

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

#### Returns

`KnowledgeGraphListItemDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22577

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:118457

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

Defined in: main.ts:118462

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:118459

link of the element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22573

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22569

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22566

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:118453

title of the element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22563

type of element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22575

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:118471

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:118496

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphListItemDataforseoLabsSerpElementItem`

Defined in: main.ts:118489

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphListItemDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
