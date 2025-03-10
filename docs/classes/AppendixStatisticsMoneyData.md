[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatisticsMoneyData

# Class: AppendixStatisticsMoneyData

Defined in: main.ts:245251

## Implements

- [`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixStatisticsMoneyData()

> **new AppendixStatisticsMoneyData**(`data`?): [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

Defined in: main.ts:245257

#### Parameters

##### data?

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

#### Returns

[`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsMoneyData`](AppendixDayStatisticsMoneyData.md)

Defined in: main.ts:245252

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`day`](../interfaces/IAppendixStatisticsMoneyData.md#day)

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

Defined in: main.ts:245253

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`minute`](../interfaces/IAppendixStatisticsMoneyData.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:245266

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:245284

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

Defined in: main.ts:245277

#### Parameters

##### data

`any`

#### Returns

[`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)
