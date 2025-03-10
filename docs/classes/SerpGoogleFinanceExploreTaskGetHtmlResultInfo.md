[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTaskGetHtmlResultInfo

# Class: SerpGoogleFinanceExploreTaskGetHtmlResultInfo

Defined in: main.ts:88873

## Implements

- [`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreTaskGetHtmlResultInfo()

> **new SerpGoogleFinanceExploreTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleFinanceExploreTaskGetHtmlResultInfo`](SerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)

Defined in: main.ts:88897

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleFinanceExploreTaskGetHtmlResultInfo`](SerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:88889

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:88893

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:88891

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:88876

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:88884

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:88882

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:88880

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88878

type of element

#### Implementation of

[`ISerpGoogleFinanceExploreTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceExploreTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88906

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88934

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreTaskGetHtmlResultInfo`](SerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)

Defined in: main.ts:88927

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreTaskGetHtmlResultInfo`](SerpGoogleFinanceExploreTaskGetHtmlResultInfo.md)
