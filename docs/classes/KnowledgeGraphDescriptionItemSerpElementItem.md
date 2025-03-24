[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphDescriptionItemSerpElementItem

# Class: KnowledgeGraphDescriptionItemSerpElementItem

Defined in: main.ts:31505

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphDescriptionItemSerpElementItem**(`data`?): `KnowledgeGraphDescriptionItemSerpElementItem`

Defined in: main.ts:31525

#### Parameters

##### data?

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md)

#### Returns

`KnowledgeGraphDescriptionItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:31517

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:31509

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31521

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:31513

text or description of the element in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31511

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDescriptionItemSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDescriptionItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31530

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

Defined in: main.ts:31556

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphDescriptionItemSerpElementItem`

Defined in: main.ts:31549

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphDescriptionItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
