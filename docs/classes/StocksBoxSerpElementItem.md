[**Documentation**](../README.md)

***

[Documentation](../README.md) / StocksBoxSerpElementItem

# Class: StocksBoxSerpElementItem

Defined in: main.ts:37553

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new StocksBoxSerpElementItem**(`data`?): `StocksBoxSerpElementItem`

Defined in: main.ts:37585

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

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37572

source domain

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`domain`](../interfaces/IStocksBoxSerpElementItem.md#domain)

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

Defined in: main.ts:37581

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`graph`](../interfaces/IStocksBoxSerpElementItem.md#graph)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37557

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`position`](../interfaces/IStocksBoxSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:37568

price indicated in the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`price`](../interfaces/IStocksBoxSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21984

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

Defined in: main.ts:37576

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rectangle`](../interfaces/IStocksBoxSerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:37566

text alongside the link title

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxSerpElementItem.md#snippet)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37564

source of the element
indicates the source of the video

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`source`](../interfaces/IStocksBoxSerpElementItem.md#source)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:37579

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`table`](../interfaces/IStocksBoxSerpElementItem.md#table)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37561

title of the row

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`title`](../interfaces/IStocksBoxSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`type`](../interfaces/IStocksBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37570

source URL

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`url`](../interfaces/IStocksBoxSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:37559

the XPath of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37590

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37618

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

Defined in: main.ts:37611

#### Parameters

##### data

`any`

#### Returns

`StocksBoxSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
