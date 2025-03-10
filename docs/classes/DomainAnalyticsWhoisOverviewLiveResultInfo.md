[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveResultInfo

# Class: DomainAnalyticsWhoisOverviewLiveResultInfo

Defined in: main.ts:99075

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveResultInfo()

> **new DomainAnalyticsWhoisOverviewLiveResultInfo**(`data`?): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

Defined in: main.ts:99085

#### Parameters

##### data?

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)[]

Defined in: main.ts:99081

contains ranking and traffic data

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99079

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99077

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99094

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99117

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

Defined in: main.ts:99110

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)
