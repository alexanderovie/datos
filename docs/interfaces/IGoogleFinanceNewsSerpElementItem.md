[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceNewsSerpElementItem

# Interface: IGoogleFinanceNewsSerpElementItem

Defined in: main.ts:88553

## Extends

- [`IBaseGoogleFinanceSerpElementItem`](IBaseGoogleFinanceSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`GoogleFinanceNewsElement`](../classes/GoogleFinanceNewsElement.md)[]

Defined in: main.ts:88563

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:88559

sub-title of the news element
example: Based on Europe, Middle East, and Africa

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88556

title of the news element
example: In the news

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22417

type of element

#### Inherited from

[`IBaseGoogleFinanceSerpElementItem`](IBaseGoogleFinanceSerpElementItem.md).[`type`](IBaseGoogleFinanceSerpElementItem.md#type)
