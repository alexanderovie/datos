[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAutocompleteAdvancedItem

# Interface: ISerpGoogleAutocompleteAdvancedItem

Defined in: main.ts:58905

## Indexable

\[`key`: `string`\]: `any`

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:58943

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:58914

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:58911

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### relevance?

> `optional` **relevance**: `number`

Defined in: main.ts:58921

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

Defined in: main.ts:58930

url to search results
url to search results relevant to the google autocomplete suggestion

***

### suggestion?

> `optional` **suggestion**: `string`

Defined in: main.ts:58923

google autocomplete keyword suggestion

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

Defined in: main.ts:58927

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

Defined in: main.ts:58936

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:58907

type of element
