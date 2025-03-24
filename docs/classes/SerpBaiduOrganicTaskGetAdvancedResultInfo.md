[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetAdvancedResultInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:83010

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBaiduOrganicTaskGetAdvancedResultInfo**(`data`?): `SerpBaiduOrganicTaskGetAdvancedResultInfo`

Defined in: main.ts:83051

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Returns

`SerpBaiduOrganicTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:83024

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:83029

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:83040

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video, stocks_box, dictionary, shopping

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:83047

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:83044

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:83013

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:83021

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:83019

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:83035

search refinement chips
equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:83017

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:83042

total number of results in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:83032

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:83015

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83060

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:83097

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBaiduOrganicTaskGetAdvancedResultInfo`

Defined in: main.ts:83090

#### Parameters

##### data

`any`

#### Returns

`SerpBaiduOrganicTaskGetAdvancedResultInfo`
