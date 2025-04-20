[**Documentation**](../README.md)

***

[Documentation](../README.md) / QueriesListDataItemInfo

# Class: QueriesListDataItemInfo

Defined in: main.ts:146431

## Implements

- [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new QueriesListDataItemInfo**(`data?`): `QueriesListDataItemInfo`

Defined in: main.ts:146440

#### Parameters

##### data?

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

#### Returns

`QueriesListDataItemInfo`

## Properties

### query?

> `optional` **query**: `string`

Defined in: main.ts:146433

related query

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`query`](../interfaces/IQueriesListDataItemInfo.md#query)

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:146436

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`value`](../interfaces/IQueriesListDataItemInfo.md#value)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:146449

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:146467

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `QueriesListDataItemInfo`

Defined in: main.ts:146460

#### Parameters

##### data

`any`

#### Returns

`QueriesListDataItemInfo`
