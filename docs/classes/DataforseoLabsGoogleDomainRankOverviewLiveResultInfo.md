[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

Defined in: main.ts:115950

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo**(`data`?): `DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`

Defined in: main.ts:115968

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

Defined in: main.ts:115964

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:115962

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115958

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115956

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115952

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:115954

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:115960

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115977

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:116004

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`

Defined in: main.ts:115997

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`
