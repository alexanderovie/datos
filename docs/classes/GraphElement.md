[**Documentation**](../README.md)

***

[Documentation](../README.md) / GraphElement

# Class: GraphElement

Defined in: main.ts:37417

## Implements

- [`IGraphElement`](../interfaces/IGraphElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GraphElement**(`data`?): `GraphElement`

Defined in: main.ts:37427

#### Parameters

##### data?

[`IGraphElement`](../interfaces/IGraphElement.md)

#### Returns

`GraphElement`

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:37421

the posting date

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`date`](../interfaces/IGraphElement.md#date)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:37419

type of element

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`type`](../interfaces/IGraphElement.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:37423

the value of the rating

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`value`](../interfaces/IGraphElement.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37436

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37455

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GraphElement`

Defined in: main.ts:37448

#### Parameters

##### data

`any`

#### Returns

`GraphElement`
