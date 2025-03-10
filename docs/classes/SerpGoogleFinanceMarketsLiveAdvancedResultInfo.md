[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsLiveAdvancedResultInfo

# Class: SerpGoogleFinanceMarketsLiveAdvancedResultInfo

Defined in: main.ts:91075

## Implements

- [`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsLiveAdvancedResultInfo()

> **new SerpGoogleFinanceMarketsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleFinanceMarketsLiveAdvancedResultInfo`](SerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)

Defined in: main.ts:91115

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsLiveAdvancedResultInfo`](SerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:91089

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:91094

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:91104

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_explore_market_trends, google_finance_news, google_finance_interested, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:91111

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:91108

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:91078

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:91086

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:91084

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:91100

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:91082

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:91106

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:91097

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:91080

type of element

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91124

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:91161

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsLiveAdvancedResultInfo`](SerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)

Defined in: main.ts:91154

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsLiveAdvancedResultInfo`](SerpGoogleFinanceMarketsLiveAdvancedResultInfo.md)
