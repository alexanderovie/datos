[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsleBulkAppMetricsLiveItem

# Class: DataforseoLabsleBulkAppMetricsLiveItem

Defined in: main.ts:132988

## Implements

- [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsleBulkAppMetricsLiveItem**(`data?`): `DataforseoLabsleBulkAppMetricsLiveItem`

Defined in: main.ts:132999

#### Parameters

##### data?

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

#### Returns

`DataforseoLabsleBulkAppMetricsLiveItem`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:132992

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#app_id)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:132995

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index Signature

\[`key`: `string`\]: [`AppMetricsInfo`](AppMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:132990

search engine type

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:133008

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:133033

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsleBulkAppMetricsLiveItem`

Defined in: main.ts:133026

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsleBulkAppMetricsLiveItem`
