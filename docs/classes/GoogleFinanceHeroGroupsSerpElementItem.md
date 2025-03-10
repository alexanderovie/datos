[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceHeroGroupsSerpElementItem

# Class: GoogleFinanceHeroGroupsSerpElementItem

Defined in: main.ts:87841

## Extends

- [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)

## Implements

- [`IGoogleFinanceHeroGroupsSerpElementItem`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceHeroGroupsSerpElementItem()

> **new GoogleFinanceHeroGroupsSerpElementItem**(`data`?): [`GoogleFinanceHeroGroupsSerpElementItem`](GoogleFinanceHeroGroupsSerpElementItem.md)

Defined in: main.ts:87848

#### Parameters

##### data?

[`IGoogleFinanceHeroGroupsSerpElementItem`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md)

#### Returns

[`GoogleFinanceHeroGroupsSerpElementItem`](GoogleFinanceHeroGroupsSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`constructor`](BaseGoogleFinanceSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22141

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceSerpElementItem.md#_discriminator)

***

### markets?

> `optional` **markets**: [`GoogleFinanceMarketsInfo`](GoogleFinanceMarketsInfo.md)[]

Defined in: main.ts:87844

financial markets data
array of items containing market indexes and other financial information related to these indexes

#### Implementation of

[`IGoogleFinanceHeroGroupsSerpElementItem`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md).[`markets`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md#markets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22139

type of element

#### Implementation of

[`IGoogleFinanceHeroGroupsSerpElementItem`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceHeroGroupsSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`type`](BaseGoogleFinanceSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87853

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

Defined in: main.ts:87875

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`toJSON`](BaseGoogleFinanceSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceHeroGroupsSerpElementItem`](GoogleFinanceHeroGroupsSerpElementItem.md)

Defined in: main.ts:87868

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceHeroGroupsSerpElementItem`](GoogleFinanceHeroGroupsSerpElementItem.md)

#### Overrides

[`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md).[`fromJS`](BaseGoogleFinanceSerpElementItem.md#fromjs)
