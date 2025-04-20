[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleNewsLiveAdvancedResultInfo

# Interface: ISerpGoogleNewsLiveAdvancedResultInfo

Defined in: main.ts:50209

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:50223

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:50228

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### includes\_non\_news\_search\_results?

> `optional` **includes\_non\_news\_search\_results**: `boolean`

Defined in: main.ts:50235

indicates whether the response contains non-news search results in addition to news content

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:50240

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

***

### items?

> `optional` **items**: [`BaseGoogleNewsSerpElementItem`](../classes/BaseGoogleNewsSerpElementItem.md)[]

Defined in: main.ts:50246

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:50244

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:50212

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:50220

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:50218

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:50233

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:50216

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:50242

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:50231

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50214

type of element
