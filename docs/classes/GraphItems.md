[**Documentation**](../README.md)

***

[Documentation](../README.md) / GraphItems

# Class: GraphItems

Defined in: main.ts:92712

## Implements

- [`IGraphItems`](../interfaces/IGraphItems.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GraphItems**(`data`?): `GraphItems`

Defined in: main.ts:92725

#### Parameters

##### data?

[`IGraphItems`](../interfaces/IGraphItems.md)

#### Returns

`GraphItems`

## Properties

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:92717

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`timestamp`](../interfaces/IGraphItems.md#timestamp)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:92719

point value on graph

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`value`](../interfaces/IGraphItems.md#value)

***

### volume?

> `optional` **volume**: `number`

Defined in: main.ts:92721

volume value on graph

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`volume`](../interfaces/IGraphItems.md#volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92734

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92753

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GraphItems`

Defined in: main.ts:92746

#### Parameters

##### data

`any`

#### Returns

`GraphItems`
