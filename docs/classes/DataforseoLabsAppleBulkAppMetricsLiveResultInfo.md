[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

Defined in: main.ts:135208

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data`?): `DataforseoLabsAppleBulkAppMetricsLiveResultInfo`

Defined in: main.ts:135224

#### Parameters

##### data?

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Returns

`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

Defined in: main.ts:135220

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:135218

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:135214

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:135212

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:135210

search engine type

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:135216

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135233

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135259

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAppleBulkAppMetricsLiveResultInfo`

Defined in: main.ts:135252

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`
