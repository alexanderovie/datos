[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreLiveAdvancedResultInfo

# Class: SerpGoogleFinanceExploreLiveAdvancedResultInfo

Defined in: main.ts:89674

## Implements

- [`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreLiveAdvancedResultInfo**(`data`?): `SerpGoogleFinanceExploreLiveAdvancedResultInfo`

Defined in: main.ts:89714

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceExploreLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:89688

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:89693

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:89703

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_interested, google_finance_news, google_finance_earnings_calendar, google_finance_most_followed, google_finance_market_trends, google_finance_people_also_search

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:89710

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:89707

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:89677

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89685

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:89683

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:89699

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:89681

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:89705

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:89696

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:89679

type of element

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89723

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89760

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreLiveAdvancedResultInfo`

Defined in: main.ts:89753

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreLiveAdvancedResultInfo`
