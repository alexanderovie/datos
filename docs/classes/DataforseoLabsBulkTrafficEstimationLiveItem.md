[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBulkTrafficEstimationLiveItem

Defined in: main.ts:121800

## Implements

- [`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBulkTrafficEstimationLiveItem**(`data?`): `DataforseoLabsBulkTrafficEstimationLiveItem`

Defined in: main.ts:121810

#### Parameters

##### data?

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Returns

`DataforseoLabsBulkTrafficEstimationLiveItem`

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:121806

traffic data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121802

search engine type

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:121804

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:121819

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:121844

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBulkTrafficEstimationLiveItem`

Defined in: main.ts:121837

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBulkTrafficEstimationLiveItem`
