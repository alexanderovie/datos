[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetAdvancedResultInfo

# Class: SerpGoogleImagesTaskGetAdvancedResultInfo

Defined in: main.ts:53892

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleImagesTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleImagesTaskGetAdvancedResultInfo`

Defined in: main.ts:53931

#### Parameters

##### data?

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleImagesTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:53906

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:53911

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:53921

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)[]

Defined in: main.ts:53927

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:53925

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:53895

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:53903

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:53901

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:53916

search refinement chips

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:53899

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:53923

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:53914

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53897

type of element

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53940

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53977

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleImagesTaskGetAdvancedResultInfo`

Defined in: main.ts:53970

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleImagesTaskGetAdvancedResultInfo`
