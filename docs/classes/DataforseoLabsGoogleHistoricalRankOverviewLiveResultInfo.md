[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

Defined in: main.ts:120464

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo**(`data`?): `DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`

Defined in: main.ts:120482

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)[]

Defined in: main.ts:120478

contains historical ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:120476

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120472

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120470

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:120466

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:120468

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:120474

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120491

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:120518

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`

Defined in: main.ts:120511

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`
