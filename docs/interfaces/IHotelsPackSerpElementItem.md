[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelsPackSerpElementItem

# Interface: IHotelsPackSerpElementItem

Defined in: main.ts:37761

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:37774

starting date of stay
in the format “year-month-date”
example:
2019-11-15

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:37779

ending date of stay
in the format “year-month-date”
example:
2019-11-17

***

### items?

> `optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

Defined in: main.ts:37781

contains arrays of specific images

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37765

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

Defined in: main.ts:37785

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37769

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

Defined in: main.ts:37767

the XPath of the element
