[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTaskGetHtmlResultInfo

# Class: SerpGoogleFinanceMarketsTaskGetHtmlResultInfo

Defined in: main.ts:90703

## Implements

- [`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceMarketsTaskGetHtmlResultInfo()

> **new SerpGoogleFinanceMarketsTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](SerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)

Defined in: main.ts:90727

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](SerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90719

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:90723

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:90721

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:90706

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:90714

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:90712

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:90710

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:90708

type of element

#### Implementation of

[`ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:90736

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:90764

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](SerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)

Defined in: main.ts:90757

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceMarketsTaskGetHtmlResultInfo`](SerpGoogleFinanceMarketsTaskGetHtmlResultInfo.md)
