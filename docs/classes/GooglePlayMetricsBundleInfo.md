[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePlayMetricsBundleInfo

# Class: GooglePlayMetricsBundleInfo

Defined in: main.ts:134234

## Implements

- [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GooglePlayMetricsBundleInfo**(`data?`): `GooglePlayMetricsBundleInfo`

Defined in: main.ts:134240

#### Parameters

##### data?

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

#### Returns

`GooglePlayMetricsBundleInfo`

## Properties

### google\_play\_search\_organic?

> `optional` **google\_play\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:134236

ranking data from Google Play organic search

#### Implementation of

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md).[`google_play_search_organic`](../interfaces/IGooglePlayMetricsBundleInfo.md#google_play_search_organic)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:134249

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:134266

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GooglePlayMetricsBundleInfo`

Defined in: main.ts:134259

#### Parameters

##### data

`any`

#### Returns

`GooglePlayMetricsBundleInfo`
