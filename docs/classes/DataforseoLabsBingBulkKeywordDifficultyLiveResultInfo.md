[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

Defined in: main.ts:127374

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo**(`data?`): `DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`

Defined in: main.ts:127392

#### Parameters

##### data?

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Returns

`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkKeywordDifficultyLiveItem`](DataforseoLabsBulkKeywordDifficultyLiveItem.md)[]

Defined in: main.ts:127388

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:127386

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:127382

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:127379

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:127376

search engine type

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:127384

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:127401

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:127427

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`

Defined in: main.ts:127420

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`
