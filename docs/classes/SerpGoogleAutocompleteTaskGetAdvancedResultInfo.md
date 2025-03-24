[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Class: SerpGoogleAutocompleteTaskGetAdvancedResultInfo

Defined in: main.ts:58948

## Implements

- [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAutocompleteTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleAutocompleteTaskGetAdvancedResultInfo`

Defined in: main.ts:58987

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:58962

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:58967

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:58977

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)[]

Defined in: main.ts:58983

items of the element

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:58981

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:58951

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58959

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:58957

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:58972

search refinement chips

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:58955

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:58979

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:58970

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:58953

type of element

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58996

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59033

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAutocompleteTaskGetAdvancedResultInfo`

Defined in: main.ts:59026

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`
