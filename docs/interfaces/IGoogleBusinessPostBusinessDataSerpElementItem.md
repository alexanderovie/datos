[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleBusinessPostBusinessDataSerpElementItem

# Interface: IGoogleBusinessPostBusinessDataSerpElementItem

Defined in: main.ts:227555

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:227562

author of the post

***

### images\_url?

> `optional` **images\_url**: `string`

Defined in: main.ts:227570

url of an image included in the post

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:227581

links included in the post

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:227558

the alignment of the element in SERP
can take the following values: right

***

### post\_date?

> `optional` **post\_date**: `string`

Defined in: main.ts:227574

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

***

### post\_text?

> `optional` **post\_text**: `string`

Defined in: main.ts:227566

main content of a post

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23439

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23437

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:227564

additional content of a post

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:227579

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23434

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:227568

url of a post

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:227560

the XPath of the element
