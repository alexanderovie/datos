[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreAdvancedItem

# Class: SerpGoogleFinanceExploreAdvancedItem

Defined in: main.ts:88409

## Implements

- [`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreAdvancedItem()

> **new SerpGoogleFinanceExploreAdvancedItem**(`data`?): [`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)

Defined in: main.ts:88418

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md)

#### Returns

[`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)

## Properties

### gainers?

> `optional` **gainers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88413

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`gainers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#gainers)

***

### losers?

> `optional` **losers**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88414

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`losers`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#losers)

***

### most\_active?

> `optional` **most\_active**: [`GoogleFinanceMarketTrendsElement`](GoogleFinanceMarketTrendsElement.md)[]

Defined in: main.ts:88412

array of items
this array can take the following names: most_active, gainers, losers

#### Implementation of

[`ISerpGoogleFinanceExploreAdvancedItem`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md).[`most_active`](../interfaces/ISerpGoogleFinanceExploreAdvancedItem.md#most_active)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88427

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88458

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)

Defined in: main.ts:88451

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreAdvancedItem`](SerpGoogleFinanceExploreAdvancedItem.md)
