[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankInfo

# Class: RankInfo

Defined in: main.ts:111668

## Implements

- [`IRankInfo`](../interfaces/IRankInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RankInfo**(`data`?): `RankInfo`

Defined in: main.ts:111680

#### Parameters

##### data?

[`IRankInfo`](../interfaces/IRankInfo.md)

#### Returns

`RankInfo`

## Properties

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

Defined in: main.ts:111676

main domain rank
main_domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`main_domain_rank`](../interfaces/IRankInfo.md#main_domain_rank)

***

### page\_rank?

> `optional` **page\_rank**: `number`

Defined in: main.ts:111672

page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`page_rank`](../interfaces/IRankInfo.md#page_rank)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111689

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111707

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RankInfo`

Defined in: main.ts:111700

#### Parameters

##### data

`any`

#### Returns

`RankInfo`
