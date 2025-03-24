[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleOrganicTaskGetRegularResultInfo

# Interface: ISerpGoogleOrganicTaskGetRegularResultInfo

Defined in: main.ts:31160

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:31174

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:31179

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:31192

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, ai_overview
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:31198

items in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:31196

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:31163

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:31171

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:31169

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:31184

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:31167

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:31194

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:31182

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31165

type of element
