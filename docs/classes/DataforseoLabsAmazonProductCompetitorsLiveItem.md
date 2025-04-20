[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveItem

# Class: DataforseoLabsAmazonProductCompetitorsLiveItem

Defined in: main.ts:126344

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAmazonProductCompetitorsLiveItem**(`data?`): `DataforseoLabsAmazonProductCompetitorsLiveItem`

Defined in: main.ts:126371

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Returns

`DataforseoLabsAmazonProductCompetitorsLiveItem`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:126350

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#asin)

***

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:126354

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#avg_position)

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

Defined in: main.ts:126364

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#competitor_metrics)

***

### full\_metrics?

> `optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

Defined in: main.ts:126367

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#full_metrics)

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:126360

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#intersections)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:126346

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#se_type)

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:126358

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#sum_position)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:126380

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:126403

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAmazonProductCompetitorsLiveItem`

Defined in: main.ts:126396

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAmazonProductCompetitorsLiveItem`
