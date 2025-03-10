[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveAdvancedResultInfo

# Class: SerpGoogleFinanceQuoteLiveAdvancedResultInfo

Defined in: main.ts:93013

## Implements

- [`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceQuoteLiveAdvancedResultInfo()

> **new SerpGoogleFinanceQuoteLiveAdvancedResultInfo**(`data`?): [`SerpGoogleFinanceQuoteLiveAdvancedResultInfo`](SerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)

Defined in: main.ts:93052

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleFinanceQuoteLiveAdvancedResultInfo`](SerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:93027

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:93032

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:93042

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_quote, google_finance_compare_to, google_finance_news, google_finance_financial, google_finance_futures_chain, google_finance_details, google_finance_about, google_finance_interested, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:93048

market indexes related to the market trends element

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:93046

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93016

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93024

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:93022

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:93038

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:93020

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:93044

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:93035

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:93018

type of element

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93061

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93098

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceQuoteLiveAdvancedResultInfo`](SerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)

Defined in: main.ts:93091

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceQuoteLiveAdvancedResultInfo`](SerpGoogleFinanceQuoteLiveAdvancedResultInfo.md)
