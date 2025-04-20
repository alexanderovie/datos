[**Documentation**](../README.md)

***

[Documentation](../README.md) / Interests

# Class: Interests

Defined in: main.ts:148544

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Interests**(`data?`): `Interests`

Defined in: main.ts:148553

#### Parameters

##### data?

[`IInterests`](../interfaces/IInterests.md)

#### Returns

`Interests`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:148547

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

***

### values?

> `optional` **values**: [`Values`](Values.md)[]

Defined in: main.ts:148549

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:148562

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:148584

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Interests`

Defined in: main.ts:148577

#### Parameters

##### data

`any`

#### Returns

`Interests`
