[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreAdvancedItem

# Class: SerpGoogleFinanceExploreAdvancedItem

Defined in: main.ts:88948

## Implements

- [`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreAdvancedItem**(`data?`): `SerpGoogleFinanceExploreAdvancedItem`

Defined in: main.ts:88957

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

#### Returns

`SerpGoogleFinanceExploreAdvancedItem`

## Properties

### gainers?

> `optional` **gainers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88952

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`gainers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#gainers)

***

### losers?

> `optional` **losers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88953

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`losers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#losers)

***

### most\_active?

> `optional` **most\_active**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88951

array of items
this array can take the following names: most_active, gainers, losers

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`most_active`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#most_active)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:88966

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:88997

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreAdvancedItem`

Defined in: main.ts:88990

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreAdvancedItem`
