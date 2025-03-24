[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveResultInfo

# Class: DomainAnalyticsWhoisOverviewLiveResultInfo

Defined in: main.ts:100978

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsWhoisOverviewLiveResultInfo**(`data`?): `DomainAnalyticsWhoisOverviewLiveResultInfo`

Defined in: main.ts:100988

#### Parameters

##### data?

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Returns

`DomainAnalyticsWhoisOverviewLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)[]

Defined in: main.ts:100984

contains ranking and traffic data

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:100982

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:100980

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100997

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101020

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsWhoisOverviewLiveResultInfo`

Defined in: main.ts:101013

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsWhoisOverviewLiveResultInfo`
