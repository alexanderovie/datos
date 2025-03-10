[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleFinanceSerpElementItem

# Class: BaseGoogleFinanceSerpElementItem

Defined in: main.ts:22137

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

### new BaseGoogleFinanceSerpElementItem()

> **new BaseGoogleFinanceSerpElementItem**(`data`?): [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

Defined in: main.ts:22143

#### Parameters

##### data?

[`IBaseGoogleFinanceSerpElementItem`](../interfaces/IBaseGoogleFinanceSerpElementItem.md)

#### Returns

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22141

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22139

type of element

#### Implementation of

[`IBaseGoogleFinanceSerpElementItem`](../interfaces/IBaseGoogleFinanceSerpElementItem.md).[`type`](../interfaces/IBaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22153

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22201

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

Defined in: main.ts:22159

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)
