[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetAdvancedResultInfo

# Class: SerpGoogleNewsTaskGetAdvancedResultInfo

Defined in: main.ts:49299

## Implements

- [`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleNewsTaskGetAdvancedResultInfo**(`data?`): `SerpGoogleNewsTaskGetAdvancedResultInfo`

Defined in: main.ts:49340

#### Parameters

##### data?

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleNewsTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:49313

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:49318

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#datetime)

***

### includes\_non\_news\_search\_results?

> `optional` **includes\_non\_news\_search\_results**: `boolean`

Defined in: main.ts:49325

indicates whether the response contains non-news search results in addition to news content

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`includes_non_news_search_results`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#includes_non_news_search_results)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:49330

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)[]

Defined in: main.ts:49336

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:49334

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:49302

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:49310

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:49308

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:49323

search refinement chips

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:49306

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:49332

total number of results in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:49321

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49304

type of element

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:49349

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:49387

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleNewsTaskGetAdvancedResultInfo`

Defined in: main.ts:49380

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleNewsTaskGetAdvancedResultInfo`
