[**Documentation**](../README.md)

***

[Documentation](../README.md) / IFoundOnWebSerpElementItem

# Interface: IFoundOnWebSerpElementItem

Defined in: main.ts:39646

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`FoundOnWebElement`](../classes/FoundOnWebElement.md)[]

Defined in: main.ts:39658

contains arrays of specific images

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:39650

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

Defined in: main.ts:39662

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

Defined in: main.ts:39656

search queries related to the elment

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:39654

title of the row

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

Defined in: main.ts:39652

the XPath of the element
