[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveAdvancedResultInfo

# Class: SerpGoogleImagesLiveAdvancedResultInfo

Defined in: main.ts:54630

## Implements

- [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleImagesLiveAdvancedResultInfo**(`data`?): `SerpGoogleImagesLiveAdvancedResultInfo`

Defined in: main.ts:54669

#### Parameters

##### data?

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleImagesLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:54644

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:54649

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:54659

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)[]

Defined in: main.ts:54665

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:54663

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:54633

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:54641

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:54639

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:54654

search refinement chips

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:54637

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:54661

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:54652

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:54635

type of element

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54678

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:54715

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleImagesLiveAdvancedResultInfo`

Defined in: main.ts:54708

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleImagesLiveAdvancedResultInfo`
