[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMathSolverSerpElementItem

# Interface: IMathSolverSerpElementItem

Defined in: main.ts:38556

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`MathSolverElement`](../classes/MathSolverElement.md)[]

Defined in: main.ts:38569

contains arrays of specific images

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:38571

link of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:38560

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22134

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22131

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:38575

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### result?

> `optional` **result**: `string`

Defined in: main.ts:38567

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38564

title of the row

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22127

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:38562

the XPath of the element
