[**Documentation**](../README.md)

***

[Documentation](../README.md) / GraphItems

# Class: GraphItems

Defined in: main.ts:92285

## Implements

- [`IGraphItems`](../interfaces/IGraphItems.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GraphItems()

> **new GraphItems**(`data`?): [`GraphItems`](GraphItems.md)

Defined in: main.ts:92298

#### Parameters

##### data?

[`IGraphItems`](../interfaces/IGraphItems.md)

#### Returns

[`GraphItems`](GraphItems.md)

## Properties

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:92290

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`timestamp`](../interfaces/IGraphItems.md#timestamp)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:92292

point value on graph

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`value`](../interfaces/IGraphItems.md#value)

***

### volume?

> `optional` **volume**: `number`

Defined in: main.ts:92294

volume value on graph

#### Implementation of

[`IGraphItems`](../interfaces/IGraphItems.md).[`volume`](../interfaces/IGraphItems.md#volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92307

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92326

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GraphItems`](GraphItems.md)

Defined in: main.ts:92319

#### Parameters

##### data

`any`

#### Returns

[`GraphItems`](GraphItems.md)
