[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphPartItemSerpElementItem

# Interface: IKnowledgeGraphPartItemSerpElementItem

Defined in: main.ts:32341

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:32353

google defined data attribute ID
example:
kc:/local:place qa

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:32360

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:32345

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22340

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22337

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:32364

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:32356

reference text
text snippet from the page that was used to generate the ai_overview_element

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32349

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:32347

the XPath of the element
