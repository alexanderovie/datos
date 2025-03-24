[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreAdvancedItem

# Class: SerpGoogleFinanceExploreAdvancedItem

Defined in: main.ts:88836

## Implements

- [`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreAdvancedItem**(`data`?): `SerpGoogleFinanceExploreAdvancedItem`

Defined in: main.ts:88845

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

#### Returns

`SerpGoogleFinanceExploreAdvancedItem`

## Properties

### gainers?

> `optional` **gainers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88840

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`gainers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#gainers)

***

### losers?

> `optional` **losers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88841

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`losers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#losers)

***

### most\_active?

> `optional` **most\_active**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88839

array of items
this array can take the following names: most_active, gainers, losers

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`most_active`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#most_active)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88854

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88885

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreAdvancedItem`

Defined in: main.ts:88878

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreAdvancedItem`
