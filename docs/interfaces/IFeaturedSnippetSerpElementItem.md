[**Documentation**](../README.md)

***

[Documentation](../README.md) / IFeaturedSnippetSerpElementItem

# Interface: IFeaturedSnippetSerpElementItem

Defined in: main.ts:31012

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:31022

breadcrumb of the ad element in SERP

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:31018

description of the ad element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:31014

domain of the ad element in SERP

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:31030

title

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:31037

images of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:31026

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

Defined in: main.ts:31044

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:31040

results table
if there are none, equals null

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:31035

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31016

title of the ad element in SERP

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

Defined in: main.ts:31020

relevant URL of the ad element in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31028

the XPath of the element
