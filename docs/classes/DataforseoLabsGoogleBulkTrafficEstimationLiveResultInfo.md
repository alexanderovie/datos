[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:121874

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data?`): `DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`

Defined in: main.ts:121892

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:121888

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:121886

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:121882

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:121879

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121876

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:121884

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:121901

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:121927

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`

Defined in: main.ts:121920

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`
