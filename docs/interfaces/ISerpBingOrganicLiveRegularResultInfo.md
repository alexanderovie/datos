[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpBingOrganicLiveRegularResultInfo

# Interface: ISerpBingOrganicLiveRegularResultInfo

Defined in: main.ts:67839

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:67853

direct URL to search engine results
you can use it to make sure that we provided exact results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:67858

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:67868

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:67875

items inside the element
array of 8 search queries related to the keyword

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:67872

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:67842

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:67850

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:67848

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:67864

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:67846

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:67870

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:67861

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:67844

type of element
