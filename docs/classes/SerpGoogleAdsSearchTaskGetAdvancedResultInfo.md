[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleAdsSearchTaskGetAdvancedResultInfo

Defined in: main.ts:65385

## Implements

- [`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAdsSearchTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleAdsSearchTaskGetAdvancedResultInfo`

Defined in: main.ts:65424

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:65399

direct URL to search engine results
in this case, equals null

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:65404

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:65414

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
ads_search

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)[]

Defined in: main.ts:65420

items of the element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:65418

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:65388

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:65396

language code in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:65394

location code in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:65409

search refinement chips

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:65392

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:65416

total number of results in SERP

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:65407

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:65390

type of element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65433

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:65470

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAdsSearchTaskGetAdvancedResultInfo`

Defined in: main.ts:65463

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`
