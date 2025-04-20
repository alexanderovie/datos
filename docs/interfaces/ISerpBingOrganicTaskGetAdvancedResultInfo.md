[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpBingOrganicTaskGetAdvancedResultInfo

# Interface: ISerpBingOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:67645

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:67659

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:67664

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:67675

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video, ai_overview

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:67682

additional items present in the element
if there are none, equals null

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:67679

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:67648

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:67656

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:67654

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:67670

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:67652

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:67677

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:67667

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:67650

type of element
