[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatisticsMoneyData

# Class: AppendixStatisticsMoneyData

Defined in: main.ts:247216

## Implements

- [`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixStatisticsMoneyData**(`data`?): `AppendixStatisticsMoneyData`

Defined in: main.ts:247222

#### Parameters

##### data?

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

#### Returns

`AppendixStatisticsMoneyData`

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsMoneyData`](AppendixDayStatisticsMoneyData.md)

Defined in: main.ts:247217

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`day`](../interfaces/IAppendixStatisticsMoneyData.md#day)

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

Defined in: main.ts:247218

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`minute`](../interfaces/IAppendixStatisticsMoneyData.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:247231

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:247249

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixStatisticsMoneyData`

Defined in: main.ts:247242

#### Parameters

##### data

`any`

#### Returns

`AppendixStatisticsMoneyData`
