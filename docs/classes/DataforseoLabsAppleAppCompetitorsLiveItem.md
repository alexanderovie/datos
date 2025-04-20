[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveItem

# Class: DataforseoLabsAppleAppCompetitorsLiveItem

Defined in: main.ts:136378

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsAppleAppCompetitorsLiveItem**(`data?`): `DataforseoLabsAppleAppCompetitorsLiveItem`

Defined in: main.ts:136403

#### Parameters

##### data?

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Returns

`DataforseoLabsAppleAppCompetitorsLiveItem`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:136382

id of the competitor app

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)

***

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:136386

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

Defined in: main.ts:136396

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)

***

### full\_metrics?

> `optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

Defined in: main.ts:136399

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:136392

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:136380

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:136390

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:136412

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:136435

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsAppleAppCompetitorsLiveItem`

Defined in: main.ts:136428

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsAppleAppCompetitorsLiveItem`
