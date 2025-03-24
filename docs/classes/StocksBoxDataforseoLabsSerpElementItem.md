[**Documentation**](../README.md)

***

[Documentation](../README.md) / StocksBoxDataforseoLabsSerpElementItem

# Class: StocksBoxDataforseoLabsSerpElementItem

Defined in: main.ts:119761

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new StocksBoxDataforseoLabsSerpElementItem**(`data`?): `StocksBoxDataforseoLabsSerpElementItem`

Defined in: main.ts:119783

#### Parameters

##### data?

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

#### Returns

`StocksBoxDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22569

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:119774

domain where a link points

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#domain)

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

Defined in: main.ts:119779

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`graph`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#graph)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:119770

price of the shopping element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`price`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:119768

text alongside the link title

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#snippet)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:119766

source of the element
indicates the source of information included in the shopping_element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`source`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#source)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:119777

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`table`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#table)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:119763

title of the result in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:119772

relevant URL

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119788

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:119813

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `StocksBoxDataforseoLabsSerpElementItem`

Defined in: main.ts:119806

#### Parameters

##### data

`any`

#### Returns

`StocksBoxDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
