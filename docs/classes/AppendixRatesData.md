[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixRatesData

# Class: AppendixRatesData

Defined in: main.ts:247434

## Implements

- [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixRatesData**(`data?`): `AppendixRatesData`

Defined in: main.ts:247442

#### Parameters

##### data?

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

#### Returns

`AppendixRatesData`

## Properties

### limits?

> `optional` **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

Defined in: main.ts:247436

rate limits for API calls per a certain period of time

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`limits`](../interfaces/IAppendixRatesData.md#limits)

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:247438

statisctics for API calls

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`statistics`](../interfaces/IAppendixRatesData.md#statistics)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:247451

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:247469

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixRatesData`

Defined in: main.ts:247462

#### Parameters

##### data

`any`

#### Returns

`AppendixRatesData`
