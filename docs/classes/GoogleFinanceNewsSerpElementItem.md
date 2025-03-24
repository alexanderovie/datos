[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceNewsSerpElementItem

# Class: GoogleFinanceNewsSerpElementItem

Defined in: main.ts:88492

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceNewsSerpElementItem**(`data`?): `GoogleFinanceNewsSerpElementItem`

Defined in: main.ts:88506

#### Parameters

##### data?

[`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md)

#### Returns

`GoogleFinanceNewsSerpElementItem`

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

> `optional` **items**: [`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)[]

Defined in: main.ts:88502

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceNewsSerpElementItem.md#items)

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:88498

sub-title of the news element
example: Based on Europe, Middle East, and Africa

#### Implementation of

[`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md).[`sub_title`](../interfaces/IGoogleFinanceNewsSerpElementItem.md#sub_title)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88495

title of the news element
example: In the news

#### Implementation of

[`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md).[`title`](../interfaces/IGoogleFinanceNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22345

type of element

#### Implementation of

[`IGoogleFinanceNewsSerpElementItem`](../interfaces/IGoogleFinanceNewsSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceNewsSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88511

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

Defined in: main.ts:88535

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceNewsSerpElementItem`

Defined in: main.ts:88528

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceNewsSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
