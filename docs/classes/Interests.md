[**Documentation**](../README.md)

***

[Documentation](../README.md) / Interests

# Class: Interests

Defined in: main.ts:148420

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Interests**(`data`?): `Interests`

Defined in: main.ts:148429

#### Parameters

##### data?

[`IInterests`](../interfaces/IInterests.md)

#### Returns

`Interests`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:148423

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

***

### values?

> `optional` **values**: [`Values`](Values.md)[]

Defined in: main.ts:148425

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148438

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148460

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Interests`

Defined in: main.ts:148453

#### Parameters

##### data

`any`

#### Returns

`Interests`
