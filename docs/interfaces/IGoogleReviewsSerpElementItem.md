[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleReviewsSerpElementItem

# Interface: IGoogleReviewsSerpElementItem

Defined in: main.ts:34641

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:34658

google-defined client id

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:34656

the additional feature of the review

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:34654

the identifier of a place

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34645

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

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:34652

the element’s rating
the popularity rate based on reviews and displayed in SERP

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:34662

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:34649

the number of reviews

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

Defined in: main.ts:34647

the XPath of the element
