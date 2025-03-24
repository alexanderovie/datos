[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketsInfo

# Class: GoogleFinanceMarketsInfo

Defined in: main.ts:88202

## Implements

- [`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketsInfo**(`data`?): `GoogleFinanceMarketsInfo`

Defined in: main.ts:88211

#### Parameters

##### data?

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md)

#### Returns

`GoogleFinanceMarketsInfo`

## Properties

### items?

> `optional` **items**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:88207

elements of search results found in SERP

#### Implementation of

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md).[`items`](../interfaces/IGoogleFinanceMarketsInfo.md#items)

***

### market?

> `optional` **market**: `string`

Defined in: main.ts:88205

financial market identifier
possible values: US, Europe, Asia, Currencies, Crypto, Futures

#### Implementation of

[`IGoogleFinanceMarketsInfo`](../interfaces/IGoogleFinanceMarketsInfo.md).[`market`](../interfaces/IGoogleFinanceMarketsInfo.md#market)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88220

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88242

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketsInfo`

Defined in: main.ts:88235

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketsInfo`
