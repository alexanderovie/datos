[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphRowItemSerpElementItem

# Class: KnowledgeGraphRowItemSerpElementItem

Defined in: main.ts:31446

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemSerpElementItem()

> **new KnowledgeGraphRowItemSerpElementItem**(`data`?): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

Defined in: main.ts:31471

#### Parameters

##### data?

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

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

Defined in: main.ts:31458

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:31463

links featured in the faq_box_element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:31450

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31467

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:31461

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31454

title of the item

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31452

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31476

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

Defined in: main.ts:31504

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

Defined in: main.ts:31497

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
