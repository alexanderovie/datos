[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveHtmlResultInfo

# Class: SerpGoogleFinanceQuoteLiveHtmlResultInfo

Defined in: main.ts:93880

## Implements

- [`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteLiveHtmlResultInfo**(`data`?): `SerpGoogleFinanceQuoteLiveHtmlResultInfo`

Defined in: main.ts:93904

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:93896

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:93900

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:93898

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93883

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93891

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93889

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:93887

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:93885

type of element

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93913

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93941

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteLiveHtmlResultInfo`

Defined in: main.ts:93934

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlResultInfo`
