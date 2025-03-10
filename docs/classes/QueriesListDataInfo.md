[**Documentation**](../README.md)

***

[Documentation](../README.md) / QueriesListDataInfo

# Class: QueriesListDataInfo

Defined in: main.ts:143960

## Implements

- [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataInfo()

> **new QueriesListDataInfo**(`data`?): [`QueriesListDataInfo`](QueriesListDataInfo.md)

Defined in: main.ts:143970

#### Parameters

##### data?

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

## Properties

### rising?

> `optional` **rising**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

Defined in: main.ts:143966

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`rising`](../interfaces/IQueriesListDataInfo.md#rising)

***

### top?

> `optional` **top**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

Defined in: main.ts:143963

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`top`](../interfaces/IQueriesListDataInfo.md#top)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:143979

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:144005

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`QueriesListDataInfo`](QueriesListDataInfo.md)

Defined in: main.ts:143998

#### Parameters

##### data

`any`

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)
