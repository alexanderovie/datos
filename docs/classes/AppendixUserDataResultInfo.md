[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixUserDataResultInfo

# Class: AppendixUserDataResultInfo

Defined in: main.ts:248201

## Implements

- [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixUserDataResultInfo()

> **new AppendixUserDataResultInfo**(`data`?): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

Defined in: main.ts:248216

#### Parameters

##### data?

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

## Properties

### login?

> `optional` **login**: `string`

Defined in: main.ts:248203

your login

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`login`](../interfaces/IAppendixUserDataResultInfo.md#login)

***

### money?

> `optional` **money**: [`AppendixMoneyData`](AppendixMoneyData.md)

Defined in: main.ts:248210

section of your spending, USD

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`money`](../interfaces/IAppendixUserDataResultInfo.md#money)

***

### price?

> `optional` **price**: [`AppendixPriceData`](AppendixPriceData.md)

Defined in: main.ts:248212

pricing

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`price`](../interfaces/IAppendixUserDataResultInfo.md#price)

***

### rates?

> `optional` **rates**: [`AppendixRatesData`](AppendixRatesData.md)

Defined in: main.ts:248208

your API rates

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`rates`](../interfaces/IAppendixUserDataResultInfo.md#rates)

***

### timezone?

> `optional` **timezone**: `string`

Defined in: main.ts:248206

your time zone
can be set in your profile settings

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`timezone`](../interfaces/IAppendixUserDataResultInfo.md#timezone)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:248225

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:248246

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

Defined in: main.ts:248239

#### Parameters

##### data

`any`

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)
