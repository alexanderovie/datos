[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetAdvancedResultInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:86305

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetAdvancedResultInfo()

> **new SerpSeznamOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:86346

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:86319

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:86324

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:86335

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:86342

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:86339

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:86308

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:86316

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:86314

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:86330

search refinement chips
equals null

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:86312

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:86337

total number of results in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:86327

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:86310

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:86355

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:86392

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:86385

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)
