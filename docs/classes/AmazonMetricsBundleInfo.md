[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonMetricsBundleInfo

# Class: AmazonMetricsBundleInfo

Defined in: main.ts:125662

## Implements

- [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonMetricsBundleInfo**(`data`?): `AmazonMetricsBundleInfo`

Defined in: main.ts:125670

#### Parameters

##### data?

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

#### Returns

`AmazonMetricsBundleInfo`

## Properties

### amazon\_paid?

> `optional` **amazon\_paid**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:125666

ranking data from Amazon paid SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_paid`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_paid)

***

### amazon\_serp?

> `optional` **amazon\_serp**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:125664

ranking data from Amazon organic SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_serp`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_serp)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125679

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125697

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonMetricsBundleInfo`

Defined in: main.ts:125690

#### Parameters

##### data

`any`

#### Returns

`AmazonMetricsBundleInfo`
