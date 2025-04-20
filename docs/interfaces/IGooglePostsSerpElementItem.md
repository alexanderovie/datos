[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGooglePostsSerpElementItem

# Interface: IGooglePostsSerpElementItem

Defined in: main.ts:39204

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:39216

google-defined client id

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:39214

the additional feature of the review

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:39208

the alignment of the element in SERP
can take the following values:
left, right

***

### posts\_id?

> `optional` **posts\_id**: `string`

Defined in: main.ts:39212

the identifier of the google_posts feature

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

Defined in: main.ts:39220

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22341

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:39210

the XPath of the element
