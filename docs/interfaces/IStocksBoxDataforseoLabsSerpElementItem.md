[**Documentation**](../README.md)

***

[Documentation](../README.md) / IStocksBoxDataforseoLabsSerpElementItem

# Interface: IStocksBoxDataforseoLabsSerpElementItem

Defined in: main.ts:119832

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:119845

domain where a link points

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

Defined in: main.ts:119850

contains data provided in the graph of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22847

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:119841

price of the shopping element

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22843

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22840

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:119839

text alongside the link title

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:119837

source of the element
indicates the source of information included in the shopping_element

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:119848

results table
if there are none, equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:119834

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22837

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:119843

relevant URL

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
