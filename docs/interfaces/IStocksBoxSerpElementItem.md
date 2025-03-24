[**Documentation**](../README.md)

***

[Documentation](../README.md) / IStocksBoxSerpElementItem

# Interface: IStocksBoxSerpElementItem

Defined in: main.ts:37640

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37659

source domain

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

Defined in: main.ts:37668

contains data provided in the graph of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37644

the alignment of the element in SERP
can take the following values:
left, right

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:37655

price indicated in the element

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

Defined in: main.ts:37663

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:37653

text alongside the link title

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37651

source of the element
indicates the source of the video

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:37666

results table
if there are none, equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37648

title of the row

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37657

source URL

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:37646

the XPath of the element
