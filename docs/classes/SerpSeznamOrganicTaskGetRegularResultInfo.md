[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetRegularResultInfo

# Class: SerpSeznamOrganicTaskGetRegularResultInfo

Defined in: main.ts:86570

## Implements

- [`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpSeznamOrganicTaskGetRegularResultInfo**(`data?`): `SerpSeznamOrganicTaskGetRegularResultInfo`

Defined in: main.ts:86613

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Returns

`SerpSeznamOrganicTaskGetRegularResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:86584

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:86589

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:86603

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for the organic type only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Seznam Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:86609

items in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:86607

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:86573

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:86581

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:86579

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:86595

search refinement chips
equals null

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:86577

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:86605

total number of results in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:86592

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:86575

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:86622

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:86659

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpSeznamOrganicTaskGetRegularResultInfo`

Defined in: main.ts:86652

#### Parameters

##### data

`any`

#### Returns

`SerpSeznamOrganicTaskGetRegularResultInfo`
