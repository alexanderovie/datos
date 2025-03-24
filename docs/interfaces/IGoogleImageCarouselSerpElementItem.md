[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleImageCarouselSerpElementItem

# Interface: IGoogleImageCarouselSerpElementItem

Defined in: main.ts:53721

## Extends

- [`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

Defined in: main.ts:53729

items of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:53725

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:53651

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:53648

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:53733

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:53727

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53644

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:53653

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)
