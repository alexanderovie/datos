[**Documentation**](../README.md)

***

[Documentation](../README.md) / IImagesSerpElementItem

# Interface: IImagesSerpElementItem

Defined in: main.ts:34377

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:34389

contains arrays of specific images

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34381

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22348

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22345

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:34396

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

Defined in: main.ts:34392

contains keywords and images related to the specified search term
if there are none, equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34385

title of the row

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22341

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34387

source URL

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:34383

the XPath of the element
