[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

# Class: SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

Defined in: main.ts:90435

## Implements

- [`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo()

> **new SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:90475

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:90449

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90454

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:90464

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_explore_market_trends, google_finance_news, google_finance_interested, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:90471

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:90468

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:90438

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:90446

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:90444

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:90460

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:90442

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:90466

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:90457

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:90440

type of element

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90484

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:90521

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:90514

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo`](SerpGoogleFinanceMarketsTaskGetAdvancedResultInfo.md)
