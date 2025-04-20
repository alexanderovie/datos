[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveItem

# Class: DataforseoLabsGoogleHistoricalSerpsLiveItem

Defined in: main.ts:117142

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalSerpsLiveItem**(`data?`): `DataforseoLabsGoogleHistoricalSerpsLiveItem`

Defined in: main.ts:117187

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Returns

`DataforseoLabsGoogleHistoricalSerpsLiveItem`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:117158

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`check_url`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:117183

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`clickstream_etv`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#clickstream_etv)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:117163

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`datetime`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:117171

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`item_types`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

Defined in: main.ts:117178

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:117175

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:117147

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:117155

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:117153

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:117151

search engine domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_domain`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:117173

total number of results in SERP

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_results_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117144

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:117166

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`spell`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:117149

type of element

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:117196

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:117234

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalSerpsLiveItem`

Defined in: main.ts:117227

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalSerpsLiveItem`
