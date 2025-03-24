[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo

# Class: SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo

Defined in: main.ts:92780

## Implements

- [`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`

Defined in: main.ts:92819

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:92794

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:92799

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:92809

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_quote, google_finance_compare_to, google_finance_news, google_finance_financial, google_finance_futures_chain, google_finance_details, google_finance_about, google_finance_interested, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:92815

market indexes related to the market trends element

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:92813

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:92783

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:92791

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:92789

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:92805

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:92787

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:92811

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:92802

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:92785

type of element

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92828

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92865

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`

Defined in: main.ts:92858

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteTaskGetAdvancedResultInfo`
