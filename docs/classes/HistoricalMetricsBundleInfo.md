[**Documentation**](../README.md)

***

[Documentation](../README.md) / HistoricalMetricsBundleInfo

# Class: HistoricalMetricsBundleInfo

Defined in: main.ts:122384

## Implements

- [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HistoricalMetricsBundleInfo**(`data?`): `HistoricalMetricsBundleInfo`

Defined in: main.ts:122396

#### Parameters

##### data?

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

#### Returns

`HistoricalMetricsBundleInfo`

## Properties

### featured\_snippet?

> `optional` **featured\_snippet**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:122392

traffic data from the local pack results in SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`featured_snippet`](../interfaces/IHistoricalMetricsBundleInfo.md#featured_snippet)

***

### local\_pack?

> `optional` **local\_pack**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:122390

traffic data from the featured snippet results in Google SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`local_pack`](../interfaces/IHistoricalMetricsBundleInfo.md#local_pack)

***

### organic?

> `optional` **organic**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:122386

traffic data from organic search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`organic`](../interfaces/IHistoricalMetricsBundleInfo.md#organic)

***

### paid?

> `optional` **paid**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:122388

traffic data from paid search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`paid`](../interfaces/IHistoricalMetricsBundleInfo.md#paid)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:122405

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:122441

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HistoricalMetricsBundleInfo`

Defined in: main.ts:122434

#### Parameters

##### data

`any`

#### Returns

`HistoricalMetricsBundleInfo`
