[**Documentation**](../README.md)

***

[Documentation](../README.md) / Demography

# Class: Demography

Defined in: main.ts:146845

## Implements

- [`IDemography`](../interfaces/IDemography.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Demography()

> **new Demography**(`data`?): [`Demography`](Demography.md)

Defined in: main.ts:146853

#### Parameters

##### data?

[`IDemography`](../interfaces/IDemography.md)

#### Returns

[`Demography`](Demography.md)

## Properties

### age?

> `optional` **age**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

Defined in: main.ts:146847

distribution of keyword popularity by age

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`age`](../interfaces/IDemography.md#age)

***

### gender?

> `optional` **gender**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

Defined in: main.ts:146849

distribution of keyword popularity by gender

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`gender`](../interfaces/IDemography.md#gender)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146862

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146888

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Demography`](Demography.md)

Defined in: main.ts:146881

#### Parameters

##### data

`any`

#### Returns

[`Demography`](Demography.md)
