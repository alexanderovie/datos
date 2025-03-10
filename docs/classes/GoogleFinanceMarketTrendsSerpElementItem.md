[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketTrendsSerpElementItem

# Class: GoogleFinanceMarketTrendsSerpElementItem

Defined in: main.ts:88493

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceMarketTrendsSerpElementItem()

> **new GoogleFinanceMarketTrendsSerpElementItem**(`data`?): [`GoogleFinanceMarketTrendsSerpElementItem`](GoogleFinanceMarketTrendsSerpElementItem.md)

Defined in: main.ts:88501

#### Parameters

##### data?

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md)

#### Returns

[`GoogleFinanceMarketTrendsSerpElementItem`](GoogleFinanceMarketTrendsSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`constructor`](BaseGoogleFinanceSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22141

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)

Defined in: main.ts:88497

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22139

type of element

#### Implementation of

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88506

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`init`](BaseGoogleFinanceSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88524

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceMarketTrendsSerpElementItem`](GoogleFinanceMarketTrendsSerpElementItem.md)

Defined in: main.ts:88517

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceMarketTrendsSerpElementItem`](GoogleFinanceMarketTrendsSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
