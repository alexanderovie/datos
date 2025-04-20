[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteAdvancedItem

# Class: SerpGoogleAutocompleteAdvancedItem

Defined in: main.ts:58916

## Implements

- [`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAutocompleteAdvancedItem**(`data?`): `SerpGoogleAutocompleteAdvancedItem`

Defined in: main.ts:58958

#### Parameters

##### data?

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md)

#### Returns

`SerpGoogleAutocompleteAdvancedItem`

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:58954

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`highlighted`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#highlighted)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:58925

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:58922

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#rank_group)

***

### relevance?

> `optional` **relevance**: `number`

Defined in: main.ts:58932

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`relevance`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#relevance)

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

Defined in: main.ts:58941

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`search_query_url`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#search_query_url)

***

### suggestion?

> `optional` **suggestion**: `string`

Defined in: main.ts:58934

google autocomplete keyword suggestion

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`suggestion`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#suggestion)

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

Defined in: main.ts:58938

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`suggestion_type`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#suggestion_type)

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

Defined in: main.ts:58947

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`thumbnail_url`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#thumbnail_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:58918

type of element

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:58967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:58996

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAutocompleteAdvancedItem`

Defined in: main.ts:58989

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAutocompleteAdvancedItem`
