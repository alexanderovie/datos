[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveHtmlResultInfo

# Class: SerpGoogleFinanceQuoteLiveHtmlResultInfo

Defined in: main.ts:93453

## Implements

- [`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceQuoteLiveHtmlResultInfo()

> **new SerpGoogleFinanceQuoteLiveHtmlResultInfo**(`data`?): [`SerpGoogleFinanceQuoteLiveHtmlResultInfo`](SerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

Defined in: main.ts:93477

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleFinanceQuoteLiveHtmlResultInfo`](SerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:93469

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:93473

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:93471

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93456

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93464

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93462

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:93460

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:93458

type of element

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93486

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93514

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceQuoteLiveHtmlResultInfo`](SerpGoogleFinanceQuoteLiveHtmlResultInfo.md)

Defined in: main.ts:93507

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceQuoteLiveHtmlResultInfo`](SerpGoogleFinanceQuoteLiveHtmlResultInfo.md)
