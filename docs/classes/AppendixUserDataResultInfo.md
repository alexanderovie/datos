[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixUserDataResultInfo

# Class: AppendixUserDataResultInfo

Defined in: main.ts:250996

## Implements

- [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixUserDataResultInfo**(`data?`): `AppendixUserDataResultInfo`

Defined in: main.ts:251011

#### Parameters

##### data?

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

#### Returns

`AppendixUserDataResultInfo`

## Properties

### login?

> `optional` **login**: `string`

Defined in: main.ts:250998

your login

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`login`](../interfaces/IAppendixUserDataResultInfo.md#login)

***

### money?

> `optional` **money**: [`AppendixMoneyData`](AppendixMoneyData.md)

Defined in: main.ts:251005

section of your spending, USD

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`money`](../interfaces/IAppendixUserDataResultInfo.md#money)

***

### price?

> `optional` **price**: [`AppendixPriceData`](AppendixPriceData.md)

Defined in: main.ts:251007

pricing

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`price`](../interfaces/IAppendixUserDataResultInfo.md#price)

***

### rates?

> `optional` **rates**: [`AppendixRatesData`](AppendixRatesData.md)

Defined in: main.ts:251003

your API rates

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`rates`](../interfaces/IAppendixUserDataResultInfo.md#rates)

***

### timezone?

> `optional` **timezone**: `string`

Defined in: main.ts:251001

your time zone
can be set in your profile settings

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`timezone`](../interfaces/IAppendixUserDataResultInfo.md#timezone)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:251020

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:251041

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixUserDataResultInfo`

Defined in: main.ts:251034

#### Parameters

##### data

`any`

#### Returns

`AppendixUserDataResultInfo`
