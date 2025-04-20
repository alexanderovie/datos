[**Documentation**](../README.md)

***

[Documentation](../README.md) / StocksBoxSerpElementItem

# Class: StocksBoxSerpElementItem

Defined in: main.ts:37561

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new StocksBoxSerpElementItem**(`data?`): `StocksBoxSerpElementItem`

Defined in: main.ts:37593

#### Parameters

##### data?

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

#### Returns

`StocksBoxSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37580

source domain

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`domain`](../interfaces/IStocksBoxSerpElementItem.md#domain)

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

Defined in: main.ts:37589

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`graph`](../interfaces/IStocksBoxSerpElementItem.md#graph)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`position`](../interfaces/IStocksBoxSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:37576

price indicated in the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`price`](../interfaces/IStocksBoxSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37584

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rectangle`](../interfaces/IStocksBoxSerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:37574

text alongside the link title

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxSerpElementItem.md#snippet)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37572

source of the element
indicates the source of the video

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`source`](../interfaces/IStocksBoxSerpElementItem.md#source)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:37587

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`table`](../interfaces/IStocksBoxSerpElementItem.md#table)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37569

title of the row

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`title`](../interfaces/IStocksBoxSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`type`](../interfaces/IStocksBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37578

source URL

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`url`](../interfaces/IStocksBoxSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:37567

the XPath of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:37598

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:37626

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `StocksBoxSerpElementItem`

Defined in: main.ts:37619

#### Parameters

##### data

`any`

#### Returns

`StocksBoxSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
