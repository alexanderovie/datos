[**Documentation**](../README.md)

***

[Documentation](../README.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

Defined in: main.ts:100776

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MetricsBundleInfo**(`data?`): `MetricsBundleInfo`

Defined in: main.ts:100784

#### Parameters

##### data?

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

#### Returns

`MetricsBundleInfo`

## Properties

### organic?

> `optional` **organic**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:100778

ranking and traffic data from organic search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`organic`](../interfaces/IMetricsBundleInfo.md#organic)

***

### paid?

> `optional` **paid**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:100780

ranking and traffic data from paid search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`paid`](../interfaces/IMetricsBundleInfo.md#paid)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:100793

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:100811

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MetricsBundleInfo`

Defined in: main.ts:100804

#### Parameters

##### data

`any`

#### Returns

`MetricsBundleInfo`
