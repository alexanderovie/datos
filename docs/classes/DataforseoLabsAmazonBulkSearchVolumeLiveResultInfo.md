[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

Defined in: main.ts:123892

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo**(`data`?): `DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`

Defined in: main.ts:123910

#### Parameters

##### data?

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Returns

`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

Defined in: main.ts:123906

contains keyword search volume data data

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:123904

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123900

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123897

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123894

search engine type

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:123902

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123919

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123945

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`

Defined in: main.ts:123938

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`
