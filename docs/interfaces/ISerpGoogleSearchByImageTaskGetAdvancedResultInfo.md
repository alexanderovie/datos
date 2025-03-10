[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Interface: ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

Defined in: main.ts:55929

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:55944

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:55949

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:55931

URL specified in a POST array

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:55960

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:55966

items featured in the faq_box

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:55964

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:55933

keyword Google associated with the specified image

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:55941

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:55939

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:55954

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:55937

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:55962

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:55952

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:55935

type of element
