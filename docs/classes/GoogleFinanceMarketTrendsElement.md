[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketTrendsElement

# Class: GoogleFinanceMarketTrendsElement

Defined in: main.ts:88762

## Implements

- [`IGoogleFinanceMarketTrendsElement`](../interfaces/IGoogleFinanceMarketTrendsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketTrendsElement**(`data`?): `GoogleFinanceMarketTrendsElement`

Defined in: main.ts:88774

#### Parameters

##### data?

[`IGoogleFinanceMarketTrendsElement`](../interfaces/IGoogleFinanceMarketTrendsElement.md)

#### Returns

`GoogleFinanceMarketTrendsElement`

## Properties

### news?

> `optional` **news**: [`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)[]

Defined in: main.ts:88770

array of items
array contains the following type of items: google_finance_news_element

#### Implementation of

[`IGoogleFinanceMarketTrendsElement`](../interfaces/IGoogleFinanceMarketTrendsElement.md).[`news`](../interfaces/IGoogleFinanceMarketTrendsElement.md#news)

***

### quote?

> `optional` **quote**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)

Defined in: main.ts:88767

object of items
array contains the following type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceMarketTrendsElement`](../interfaces/IGoogleFinanceMarketTrendsElement.md).[`quote`](../interfaces/IGoogleFinanceMarketTrendsElement.md#quote)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88764

type of element

#### Implementation of

[`IGoogleFinanceMarketTrendsElement`](../interfaces/IGoogleFinanceMarketTrendsElement.md).[`type`](../interfaces/IGoogleFinanceMarketTrendsElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88783

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88806

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketTrendsElement`

Defined in: main.ts:88799

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketTrendsElement`
