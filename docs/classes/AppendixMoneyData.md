[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixMoneyData

# Class: AppendixMoneyData

Defined in: main.ts:247268

## Implements

- [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixMoneyData**(`data`?): `AppendixMoneyData`

Defined in: main.ts:247280

#### Parameters

##### data?

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

#### Returns

`AppendixMoneyData`

## Properties

### balance?

> `optional` **balance**: `number`

Defined in: main.ts:247272

amount of money left in your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`balance`](../interfaces/IAppendixMoneyData.md#balance)

***

### limits?

> `optional` **limits**: [`AppendixLimitsMoneyData`](AppendixLimitsMoneyData.md)

Defined in: main.ts:247274

cost limits

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`limits`](../interfaces/IAppendixMoneyData.md#limits)

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

Defined in: main.ts:247276

statistics of your spending

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`statistics`](../interfaces/IAppendixMoneyData.md#statistics)

***

### total?

> `optional` **total**: `number`

Defined in: main.ts:247270

total amount of money deposited to your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`total`](../interfaces/IAppendixMoneyData.md#total)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:247289

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:247309

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixMoneyData`

Defined in: main.ts:247302

#### Parameters

##### data

`any`

#### Returns

`AppendixMoneyData`
