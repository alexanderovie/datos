[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsDomainRankOverviewLiveItem

# Class: DataforseoLabsDomainRankOverviewLiveItem

Defined in: main.ts:115870

## Implements

- [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsDomainRankOverviewLiveItem**(`data`?): `DataforseoLabsDomainRankOverviewLiveItem`

Defined in: main.ts:115882

#### Parameters

##### data?

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

#### Returns

`DataforseoLabsDomainRankOverviewLiveItem`

## Properties

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115876

language code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115874

location code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#location_code)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:115878

ranking data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115872

search engine type

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115891

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115917

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsDomainRankOverviewLiveItem`

Defined in: main.ts:115910

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsDomainRankOverviewLiveItem`
