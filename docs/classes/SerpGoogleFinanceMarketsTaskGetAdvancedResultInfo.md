[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

# Class: SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

Defined in: main.ts:90862

## Implements

- [`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`

Defined in: main.ts:90902

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:90876

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90881

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:90891

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_explore_market_trends, google_finance_news, google_finance_interested, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:90898

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:90895

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:90865

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:90873

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:90871

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:90887

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:90869

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:90893

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:90884

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:90867

type of element

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90911

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:90948

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`

Defined in: main.ts:90941

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`
