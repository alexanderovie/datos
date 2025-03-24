[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveItem

# Class: DataforseoLabsAmazonRankedKeywordsLiveItem

Defined in: main.ts:125158

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonRankedKeywordsLiveItem**(`data`?): `DataforseoLabsAmazonRankedKeywordsLiveItem`

Defined in: main.ts:125168

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Returns

`DataforseoLabsAmazonRankedKeywordsLiveItem`

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:125162

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

Defined in: main.ts:125164

contains data on the products’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:125160

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125177

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125196

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonRankedKeywordsLiveItem`

Defined in: main.ts:125189

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonRankedKeywordsLiveItem`
