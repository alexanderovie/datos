[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketsInfo

# Class: GoogleFinanceMarketsInfo

Defined in: main.ts:87775

## Implements

- [`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceMarketsInfo()

> **new GoogleFinanceMarketsInfo**(`data`?): [`GoogleFinanceMarketsInfo`](GoogleFinanceMarketsInfo.md)

Defined in: main.ts:87784

#### Parameters

##### data?

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md)

#### Returns

[`GoogleFinanceMarketsInfo`](GoogleFinanceMarketsInfo.md)

## Properties

### items?

> `optional` **items**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:87780

elements of search results found in SERP

#### Implementation of

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md).[`items`](../interfaces/IGoogleFinanceMarketsInfo.md#items)

***

### market?

> `optional` **market**: `string`

Defined in: main.ts:87778

financial market identifier
possible values: US, Europe, Asia, Currencies, Crypto, Futures

#### Implementation of

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md).[`market`](../interfaces/IGoogleFinanceMarketsInfo.md#market)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87793

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:87815

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceMarketsInfo`](GoogleFinanceMarketsInfo.md)

Defined in: main.ts:87808

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceMarketsInfo`](GoogleFinanceMarketsInfo.md)
