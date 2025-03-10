[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo

# Interface: ISerpGoogleFinanceQuoteTaskGetAdvancedResultInfo

Defined in: main.ts:92469

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:92483

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:92488

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:92498

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_hero_groups, google_finance_quote, google_finance_compare_to, google_finance_news, google_finance_financial, google_finance_futures_chain, google_finance_details, google_finance_about, google_finance_interested, google_finance_people_also_search

***

### items?

> `optional` **items**: [`BaseGoogleFinanceSerpElementItem`](../classes/BaseGoogleFinanceSerpElementItem.md)[]

Defined in: main.ts:92504

market indexes related to the market trends element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:92502

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:92472

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:92480

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:92478

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:92494

search refinement chips
in this case, the value will be null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:92476

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:92500

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:92491

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:92474

type of element
