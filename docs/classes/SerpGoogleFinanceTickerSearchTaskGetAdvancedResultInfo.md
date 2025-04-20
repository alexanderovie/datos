[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo

Defined in: main.ts:94992

## Implements

- [`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo**(`data?`): `SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`

Defined in: main.ts:95033

#### Parameters

##### data?

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:95006

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:95011

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:95021

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md)[]

Defined in: main.ts:95029

items of search results found in SERP
array of items containing market indexes data;
possible type of items: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95025

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:94995

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95003

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:95001

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:95017

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:94999

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:95023

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:95014

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:94997

type of element

#### Implementation of

[`ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:95042

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:95079

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`

Defined in: main.ts:95072

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo`
