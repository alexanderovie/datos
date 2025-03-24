[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

Defined in: main.ts:126882

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo**(`data`?): `DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`

Defined in: main.ts:126902

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Returns

`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`

## Properties

### asins?

> `optional` **asins**: `object`

Defined in: main.ts:126886

ASINs in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`asins`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#asins)

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

Defined in: main.ts:126898

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:126896

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:126892

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:126889

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:126884

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:126894

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:126911

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:126944

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`

Defined in: main.ts:126937

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`
