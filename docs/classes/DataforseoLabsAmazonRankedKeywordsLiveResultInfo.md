[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveResultInfo

Defined in: main.ts:125220

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonRankedKeywordsLiveResultInfo**(`data`?): `DataforseoLabsAmazonRankedKeywordsLiveResultInfo`

Defined in: main.ts:125240

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Returns

`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:125224

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

Defined in: main.ts:125236

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:125234

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:125230

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:125227

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:125222

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:125232

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125249

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125276

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonRankedKeywordsLiveResultInfo`

Defined in: main.ts:125269

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`
