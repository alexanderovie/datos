[**Documentation**](../README.md)

***

[Documentation](../README.md) / Demography

# Class: Demography

Defined in: main.ts:149254

## Implements

- [`IDemography`](../interfaces/IDemography.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Demography**(`data`?): `Demography`

Defined in: main.ts:149262

#### Parameters

##### data?

[`IDemography`](../interfaces/IDemography.md)

#### Returns

`Demography`

## Properties

### age?

> `optional` **age**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

Defined in: main.ts:149256

distribution of keyword popularity by age

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`age`](../interfaces/IDemography.md#age)

***

### gender?

> `optional` **gender**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

Defined in: main.ts:149258

distribution of keyword popularity by gender

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`gender`](../interfaces/IDemography.md#gender)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149271

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149297

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Demography`

Defined in: main.ts:149290

#### Parameters

##### data

`any`

#### Returns

`Demography`
