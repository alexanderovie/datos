[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetHtmlResultInfo

# Class: SerpGoogleJobsTaskGetHtmlResultInfo

Defined in: main.ts:57892

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleJobsTaskGetHtmlResultInfo**(`data?`): `SerpGoogleJobsTaskGetHtmlResultInfo`

Defined in: main.ts:57916

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Returns

`SerpGoogleJobsTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:57908

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:57912

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:57910

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:57895

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:57903

language code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:57901

location code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:57899

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:57897

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:57925

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:57953

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleJobsTaskGetHtmlResultInfo`

Defined in: main.ts:57946

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleJobsTaskGetHtmlResultInfo`
