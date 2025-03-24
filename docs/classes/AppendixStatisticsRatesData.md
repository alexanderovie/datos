[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatisticsRatesData

# Class: AppendixStatisticsRatesData

Defined in: main.ts:246764

## Implements

- [`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixStatisticsRatesData**(`data`?): `AppendixStatisticsRatesData`

Defined in: main.ts:246770

#### Parameters

##### data?

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

#### Returns

`AppendixStatisticsRatesData`

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsRatesData`](AppendixDayStatisticsRatesData.md)

Defined in: main.ts:246765

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`day`](../interfaces/IAppendixStatisticsRatesData.md#day)

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

Defined in: main.ts:246766

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`minute`](../interfaces/IAppendixStatisticsRatesData.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:246779

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:246797

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixStatisticsRatesData`

Defined in: main.ts:246790

#### Parameters

##### data

`any`

#### Returns

`AppendixStatisticsRatesData`
