[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphAiOverviewItemSerpElementItem

# Class: KnowledgeGraphAiOverviewItemSerpElementItem

Defined in: main.ts:32959

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphAiOverviewItemSerpElementItem**(`data`?): `KnowledgeGraphAiOverviewItemSerpElementItem`

Defined in: main.ts:32983

#### Parameters

##### data?

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md)

#### Returns

`KnowledgeGraphAiOverviewItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### asynchronous\_ai\_overview?

> `optional` **asynchronous\_ai\_overview**: `boolean`

Defined in: main.ts:32969

indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache;

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`asynchronous_ai_overview`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#asynchronous_ai_overview)

***

### items?

> `optional` **items**: [`AiOverviewElement`](AiOverviewElement.md)[]

Defined in: main.ts:32972

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:32963

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32979

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rectangle)

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

Defined in: main.ts:32975

additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`references`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#references)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:32965

the XPath of the element

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32988

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

Defined in: main.ts:33019

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphAiOverviewItemSerpElementItem`

Defined in: main.ts:33012

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphAiOverviewItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
