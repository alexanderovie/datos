[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveAdvancedResultInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResultInfo

Defined in: main.ts:47283

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleLocalFinderLiveAdvancedResultInfo**(`data`?): `SerpGoogleLocalFinderLiveAdvancedResultInfo`

Defined in: main.ts:47322

#### Parameters

##### data?

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleLocalFinderLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:47297

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:47302

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:47312

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:47318

items of the element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:47316

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:47286

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:47294

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:47292

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:47307

search refinement chips

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:47290

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:47314

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:47305

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:47288

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:47331

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:47368

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleLocalFinderLiveAdvancedResultInfo`

Defined in: main.ts:47361

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleLocalFinderLiveAdvancedResultInfo`
