[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:127766

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingBulkTrafficEstimationLiveResultInfo**(`data?`): `DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`

Defined in: main.ts:127784

#### Parameters

##### data?

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Returns

`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:127780

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:127778

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:127774

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:127771

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:127768

search engine type

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:127776

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:127793

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:127819

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`

Defined in: main.ts:127812

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`
