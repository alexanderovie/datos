[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoLiveAdvancedResultInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResultInfo

Defined in: main.ts:62770

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleDatasetInfoLiveAdvancedResultInfo**(`data`?): `SerpGoogleDatasetInfoLiveAdvancedResultInfo`

Defined in: main.ts:62804

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleDatasetInfoLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:62780

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:62785

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:62794

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

Defined in: main.ts:62800

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:62798

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:62773

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:62777

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:62790

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:62775

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:62796

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:62788

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62813

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:62848

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleDatasetInfoLiveAdvancedResultInfo`

Defined in: main.ts:62841

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleDatasetInfoLiveAdvancedResultInfo`
