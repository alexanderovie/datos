[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveItem

# Class: DataforseoLabsAmazonProductRankOverviewLiveItem

Defined in: main.ts:123317

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveItem()

> **new DataforseoLabsAmazonProductRankOverviewLiveItem**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

Defined in: main.ts:123329

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:123323

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#asin)

***

### metrics?

> `optional` **metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

Defined in: main.ts:123325

average keyword position of the product

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123319

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123338

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123357

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

Defined in: main.ts:123350

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)
