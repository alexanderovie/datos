[**Documentation**](../README.md)

***

[Documentation](../README.md) / Interests

# Class: Interests

Defined in: main.ts:146011

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Interests()

> **new Interests**(`data`?): [`Interests`](Interests.md)

Defined in: main.ts:146020

#### Parameters

##### data?

[`IInterests`](../interfaces/IInterests.md)

#### Returns

[`Interests`](Interests.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:146014

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

***

### values?

> `optional` **values**: [`Values`](Values.md)[]

Defined in: main.ts:146016

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146029

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146051

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Interests`](Interests.md)

Defined in: main.ts:146044

#### Parameters

##### data

`any`

#### Returns

[`Interests`](Interests.md)
