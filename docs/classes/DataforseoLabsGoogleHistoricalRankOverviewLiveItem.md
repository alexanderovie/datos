[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveItem

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveItem

Defined in: main.ts:120384

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveItem**(`data`?): `DataforseoLabsGoogleHistoricalRankOverviewLiveItem`

Defined in: main.ts:120396

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Returns

`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:120392

ranking data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:120390

month for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`month`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:120386

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:120388

year for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`year`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120405

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:120431

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalRankOverviewLiveItem`

Defined in: main.ts:120424

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`
