[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMostFollowedSerpElementItem

# Class: GoogleFinanceMostFollowedSerpElementItem

Defined in: main.ts:88814

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMostFollowedSerpElementItem**(`data?`): `GoogleFinanceMostFollowedSerpElementItem`

Defined in: main.ts:88822

#### Parameters

##### data?

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md)

#### Returns

`GoogleFinanceMostFollowedSerpElementItem`

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

> `optional` **items**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:88818

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22353

type of element

#### Implementation of

[`IGoogleFinanceMostFollowedSerpElementItem`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMostFollowedSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:88827

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

Defined in: main.ts:88849

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMostFollowedSerpElementItem`

Defined in: main.ts:88842

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMostFollowedSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
