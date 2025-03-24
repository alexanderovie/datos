[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResultInfo

Defined in: main.ts:126326

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonProductCompetitorsLiveResultInfo**(`data`?): `DataforseoLabsAmazonProductCompetitorsLiveResultInfo`

Defined in: main.ts:126346

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Returns

`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:126330

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

Defined in: main.ts:126342

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:126340

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:126336

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:126333

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:126328

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:126338

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:126355

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:126382

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonProductCompetitorsLiveResultInfo`

Defined in: main.ts:126375

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`
