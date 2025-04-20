[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskGetHtmlResultInfo

# Class: SerpGoogleFinanceQuoteTaskGetHtmlResultInfo

Defined in: main.ts:93158

## Implements

- [`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteTaskGetHtmlResultInfo**(`data?`): `SerpGoogleFinanceQuoteTaskGetHtmlResultInfo`

Defined in: main.ts:93182

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md)

#### Returns

`SerpGoogleFinanceQuoteTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:93174

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:93178

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:93176

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93161

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93169

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93167

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:93165

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:93163

type of element

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceQuoteTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:93191

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:93219

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteTaskGetHtmlResultInfo`

Defined in: main.ts:93212

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteTaskGetHtmlResultInfo`
