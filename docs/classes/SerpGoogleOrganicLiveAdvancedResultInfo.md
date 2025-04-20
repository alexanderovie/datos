[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedResultInfo

# Class: SerpGoogleOrganicLiveAdvancedResultInfo

Defined in: main.ts:42649

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleOrganicLiveAdvancedResultInfo**(`data?`): `SerpGoogleOrganicLiveAdvancedResultInfo`

Defined in: main.ts:42689

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleOrganicLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:42663

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:42668

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:42678

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, third_party_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums, compare_sites, courses, ai_overview

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:42685

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:42682

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:42652

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:42660

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:42658

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:42673

search refinement chips

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:42656

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:42680

total number of results in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:42671

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:42654

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:42698

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:42735

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleOrganicLiveAdvancedResultInfo`

Defined in: main.ts:42728

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleOrganicLiveAdvancedResultInfo`
