[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTaskGetAdvancedResultInfo

# Class: SerpGoogleFinanceExploreTaskGetAdvancedResultInfo

Defined in: main.ts:89032

## Implements

- [`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleFinanceExploreTaskGetAdvancedResultInfo`

Defined in: main.ts:89072

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceExploreTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:89046

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:89051

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:89061

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_interested, google_finance_news, google_finance_earnings_calendar, google_finance_most_followed, google_finance_market_trends, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:89068

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:89065

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:89035

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89043

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:89041

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:89057

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:89039

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:89063

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:89054

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:89037

type of element

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceExploreTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89081

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89118

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreTaskGetAdvancedResultInfo`

Defined in: main.ts:89111

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreTaskGetAdvancedResultInfo`
