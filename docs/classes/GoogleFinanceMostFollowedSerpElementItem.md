[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMostFollowedSerpElementItem

# Class: GoogleFinanceMostFollowedSerpElementItem

Defined in: main.ts:88275

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceMostFollowedSerpElementItem()

> **new GoogleFinanceMostFollowedSerpElementItem**(`data`?): [`GoogleFinanceMostFollowedSerpElementItem`](GoogleFinanceMostFollowedSerpElementItem.md)

Defined in: main.ts:88283

#### Parameters

##### data?

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md)

#### Returns

[`GoogleFinanceMostFollowedSerpElementItem`](GoogleFinanceMostFollowedSerpElementItem.md)

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

Defined in: main.ts:88279

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22139

type of element

#### Implementation of

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88288

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

Defined in: main.ts:88310

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceMostFollowedSerpElementItem`](GoogleFinanceMostFollowedSerpElementItem.md)

Defined in: main.ts:88303

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceMostFollowedSerpElementItem`](GoogleFinanceMostFollowedSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
