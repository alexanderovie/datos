[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceEarningsCalendarSerpElementItem

# Class: GoogleFinanceEarningsCalendarSerpElementItem

Defined in: main.ts:88642

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceEarningsCalendarSerpElementItem`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceEarningsCalendarSerpElementItem**(`data`?): `GoogleFinanceEarningsCalendarSerpElementItem`

Defined in: main.ts:88650

#### Parameters

##### data?

[`IGoogleFinanceEarningsCalendarSerpElementItem`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md)

#### Returns

`GoogleFinanceEarningsCalendarSerpElementItem`

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

> `optional` **items**: [`GoogleFinanceEarningsCalendarElement`](GoogleFinanceEarningsCalendarElement.md)[]

Defined in: main.ts:88646

market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`IGoogleFinanceEarningsCalendarSerpElementItem`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md).[`items`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22345

type of element

#### Implementation of

[`IGoogleFinanceEarningsCalendarSerpElementItem`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceEarningsCalendarSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88655

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

Defined in: main.ts:88677

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceEarningsCalendarSerpElementItem`

Defined in: main.ts:88670

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceEarningsCalendarSerpElementItem`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
