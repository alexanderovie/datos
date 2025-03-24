[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleFinanceSerpElementItem

# Class: BaseGoogleFinanceSerpElementItem

Defined in: main.ts:22343

## Extended by

- [`GoogleFinanceHeroGroupsSerpElementItem`](GoogleFinanceHeroGroupsSerpElementItem.md)
- [`GoogleFinanceInterestedSerpElementItem`](GoogleFinanceInterestedSerpElementItem.md)
- [`GoogleFinanceNewsSerpElementItem`](GoogleFinanceNewsSerpElementItem.md)
- [`GoogleFinanceEarningsCalendarSerpElementItem`](GoogleFinanceEarningsCalendarSerpElementItem.md)
- [`GoogleFinanceMostFollowedSerpElementItem`](GoogleFinanceMostFollowedSerpElementItem.md)
- [`GoogleFinanceMarketTrendsSerpElementItem`](GoogleFinanceMarketTrendsSerpElementItem.md)
- [`GoogleFinancePeopleAlsoSearchSerpElementItem`](GoogleFinancePeopleAlsoSearchSerpElementItem.md)

## Implements

- [`IBaseGoogleFinanceSerpElementItem`](../interfaces/IBaseGoogleFinanceSerpElementItem.md)

## Constructors

### Constructor

> **new BaseGoogleFinanceSerpElementItem**(`data`?): `BaseGoogleFinanceSerpElementItem`

Defined in: main.ts:22349

#### Parameters

##### data?

[`IBaseGoogleFinanceSerpElementItem`](../interfaces/IBaseGoogleFinanceSerpElementItem.md)

#### Returns

`BaseGoogleFinanceSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22347

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22345

type of element

#### Implementation of

[`IBaseGoogleFinanceSerpElementItem`](../interfaces/IBaseGoogleFinanceSerpElementItem.md).[`type`](../interfaces/IBaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22359

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22407

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseGoogleFinanceSerpElementItem`

Defined in: main.ts:22365

#### Parameters

##### data

`any`

#### Returns

`BaseGoogleFinanceSerpElementItem`
