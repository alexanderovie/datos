[**Documentation**](../README.md)

***

[Documentation](../README.md) / Graph

# Class: Graph

Defined in: main.ts:37479

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Graph**(`data`?): `Graph`

Defined in: main.ts:37488

#### Parameters

##### data?

[`IGraph`](../interfaces/IGraph.md)

#### Returns

`Graph`

## Properties

### items?

> `optional` **items**: [`GraphElement`](GraphElement.md)[]

Defined in: main.ts:37481

contains arrays of elements available in the list

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`items`](../interfaces/IGraph.md#items)

***

### previous\_items?

> `optional` **previous\_items**: [`GraphElement`](GraphElement.md)[]

Defined in: main.ts:37484

previous close data
contains stock price data based on the preceding time period

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`previous_items`](../interfaces/IGraph.md#previous_items)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37497

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37523

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Graph`

Defined in: main.ts:37516

#### Parameters

##### data

`any`

#### Returns

`Graph`
