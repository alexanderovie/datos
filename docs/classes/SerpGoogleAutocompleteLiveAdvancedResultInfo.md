[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteLiveAdvancedResultInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResultInfo

Defined in: main.ts:59412

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAutocompleteLiveAdvancedResultInfo**(`data`?): `SerpGoogleAutocompleteLiveAdvancedResultInfo`

Defined in: main.ts:59451

#### Parameters

##### data?

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleAutocompleteLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:59426

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:59431

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:59441

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)[]

Defined in: main.ts:59447

items of the element

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:59445

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:59415

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:59423

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:59421

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:59436

search refinement chips

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:59419

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:59443

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:59434

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:59417

type of element

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59460

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59497

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAutocompleteLiveAdvancedResultInfo`

Defined in: main.ts:59490

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAutocompleteLiveAdvancedResultInfo`
