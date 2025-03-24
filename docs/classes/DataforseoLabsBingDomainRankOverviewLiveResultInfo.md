[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResultInfo

Defined in: main.ts:129138

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingDomainRankOverviewLiveResultInfo**(`data`?): `DataforseoLabsBingDomainRankOverviewLiveResultInfo`

Defined in: main.ts:129156

#### Parameters

##### data?

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Returns

`DataforseoLabsBingDomainRankOverviewLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

Defined in: main.ts:129152

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:129150

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129146

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129144

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:129140

search engine type

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:129142

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:129148

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:129165

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:129192

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingDomainRankOverviewLiveResultInfo`

Defined in: main.ts:129185

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingDomainRankOverviewLiveResultInfo`
