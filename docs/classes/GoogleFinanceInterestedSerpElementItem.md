[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceInterestedSerpElementItem

# Class: GoogleFinanceInterestedSerpElementItem

Defined in: main.ts:87899

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceInterestedSerpElementItem`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceInterestedSerpElementItem()

> **new GoogleFinanceInterestedSerpElementItem**(`data`?): [`GoogleFinanceInterestedSerpElementItem`](GoogleFinanceInterestedSerpElementItem.md)

Defined in: main.ts:87907

#### Parameters

##### data?

[`IGoogleFinanceInterestedSerpElementItem`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md)

#### Returns

[`GoogleFinanceInterestedSerpElementItem`](GoogleFinanceInterestedSerpElementItem.md)

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

> `optional` **items**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:87903

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceInterestedSerpElementItem`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22139

type of element

#### Implementation of

[`IGoogleFinanceInterestedSerpElementItem`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceInterestedSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87912

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

Defined in: main.ts:87934

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceInterestedSerpElementItem`](GoogleFinanceInterestedSerpElementItem.md)

Defined in: main.ts:87927

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceInterestedSerpElementItem`](GoogleFinanceInterestedSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
