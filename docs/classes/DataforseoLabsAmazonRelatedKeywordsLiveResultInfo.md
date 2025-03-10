[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

Defined in: main.ts:121989

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:122010

#### Parameters

##### data?

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:122006

contains objects with keywords and related data

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:122004

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122000

language code in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:121998

location code in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121991

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#se_type)

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:121993

keyword in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword)

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

Defined in: main.ts:121996

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:122002

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122019

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122047

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:122040

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)
