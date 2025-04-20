[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketTrendsSerpElementItem

# Class: GoogleFinanceMarketTrendsSerpElementItem

Defined in: main.ts:89032

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketTrendsSerpElementItem**(`data?`): `GoogleFinanceMarketTrendsSerpElementItem`

Defined in: main.ts:89040

#### Parameters

##### data?

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md)

#### Returns

`GoogleFinanceMarketTrendsSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`constructor`](BaseGoogleFinanceSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22355

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)

Defined in: main.ts:89036

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22353

type of element

#### Implementation of

[`IGoogleFinanceMarketTrendsSerpElementItem`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMarketTrendsSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:89045

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`init`](BaseGoogleFinanceSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:89063

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketTrendsSerpElementItem`

Defined in: main.ts:89056

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketTrendsSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
