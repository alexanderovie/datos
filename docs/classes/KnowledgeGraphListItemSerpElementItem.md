[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphListItemSerpElementItem

# Class: KnowledgeGraphListItemSerpElementItem

Defined in: main.ts:31340

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListItemSerpElementItem()

> **new KnowledgeGraphListItemSerpElementItem**(`data`?): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

Defined in: main.ts:31365

#### Parameters

##### data?

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21783

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:31352

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

Defined in: main.ts:31357

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:31354

link of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:31344

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21778

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31361

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31348

title of the link element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31346

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31370

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

Defined in: main.ts:31398

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

Defined in: main.ts:31391

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
