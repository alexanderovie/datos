[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITopSightsSerpElementItem

# Interface: ITopSightsSerpElementItem

Defined in: main.ts:36884

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TopSightsElement`](../classes/TopSightsElement.md)[]

Defined in: main.ts:36894

contains arrays of specific images

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:36888

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

Defined in: main.ts:36898

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36892

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

Defined in: main.ts:36890

the XPath of the element
