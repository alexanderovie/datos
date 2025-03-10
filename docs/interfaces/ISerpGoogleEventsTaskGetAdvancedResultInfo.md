[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleEventsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleEventsTaskGetAdvancedResultInfo

Defined in: main.ts:51619

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:51633

direct URL to search engine results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:51638

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:51647

types of search results found in SERP
possible item types:
event_item

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:51655

items of the element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:51653

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:51622

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:51631

language code
in this case, the value will be null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:51628

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:51643

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:51626

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:51651

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:51641

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:51624

type of element
