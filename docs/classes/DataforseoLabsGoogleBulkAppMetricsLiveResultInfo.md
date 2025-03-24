[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

Defined in: main.ts:132942

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleBulkAppMetricsLiveResultInfo**(`data`?): `DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`

Defined in: main.ts:132958

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

Defined in: main.ts:132954

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:132952

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:132948

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:132946

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:132944

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:132950

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:132967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:132993

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`

Defined in: main.ts:132986

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`
