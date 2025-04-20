[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo

# Interface: ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo

Defined in: main.ts:95110

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:95124

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:95129

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:95139

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

***

### items?

> `optional` **items**: [`BaseGoogleFinanceTickerSearchSerpElementItem`](../classes/BaseGoogleFinanceTickerSearchSerpElementItem.md)[]

Defined in: main.ts:95147

items of search results found in SERP
array of items containing market indexes data;
possible type of items: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95143

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:95113

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95121

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:95119

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:95135

search refinement chips
in this case, the value will be null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:95117

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:95141

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:95132

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:95115

type of element
