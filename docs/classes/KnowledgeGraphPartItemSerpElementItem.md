[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphPartItemSerpElementItem

# Class: KnowledgeGraphPartItemSerpElementItem

Defined in: main.ts:32267

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphPartItemSerpElementItem**(`data?`): `KnowledgeGraphPartItemSerpElementItem`

Defined in: main.ts:32294

#### Parameters

##### data?

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

#### Returns

`KnowledgeGraphPartItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:32279

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:32286

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:32271

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32290

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:32282

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32275

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:32273

the XPath of the element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:32299

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

Defined in: main.ts:32327

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphPartItemSerpElementItem`

Defined in: main.ts:32320

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphPartItemSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
