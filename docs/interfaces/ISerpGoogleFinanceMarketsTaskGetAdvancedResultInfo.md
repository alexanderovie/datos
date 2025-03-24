[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleFinanceMarketsTaskGetAdvancedResultInfo

Defined in: main.ts:90979

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:90993

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90998

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:91008

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_explore_market_trends, google_finance_news, google_finance_interested, google_finance_people_also_search

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](../classes/BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:91015

market indexes related to the market trends element
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:91012

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:90982

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:90990

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:90988

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:91004

search refinement chips
in this case, the value will be null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:90986

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:91010

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:91001

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:90984

type of element
