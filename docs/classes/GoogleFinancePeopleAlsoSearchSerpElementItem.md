[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinancePeopleAlsoSearchSerpElementItem

# Class: GoogleFinancePeopleAlsoSearchSerpElementItem

Defined in: main.ts:88972

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinancePeopleAlsoSearchSerpElementItem`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinancePeopleAlsoSearchSerpElementItem**(`data`?): `GoogleFinancePeopleAlsoSearchSerpElementItem`

Defined in: main.ts:88980

#### Parameters

##### data?

[`IGoogleFinancePeopleAlsoSearchSerpElementItem`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md)

#### Returns

`GoogleFinancePeopleAlsoSearchSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`constructor`](BaseGoogleFinanceSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22347

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:88976

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinancePeopleAlsoSearchSerpElementItem`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md).[`items`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22345

type of element

#### Implementation of

[`IGoogleFinancePeopleAlsoSearchSerpElementItem`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md).[`type`](../interfaces/IGoogleFinancePeopleAlsoSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88985

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

Defined in: main.ts:89007

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinancePeopleAlsoSearchSerpElementItem`

Defined in: main.ts:89000

#### Parameters

##### data

`any`

#### Returns

`GoogleFinancePeopleAlsoSearchSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
