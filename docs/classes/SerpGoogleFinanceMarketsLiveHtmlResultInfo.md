[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsLiveHtmlResultInfo

# Class: SerpGoogleFinanceMarketsLiveHtmlResultInfo

Defined in: main.ts:91924

## Implements

- [`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceMarketsLiveHtmlResultInfo**(`data`?): `SerpGoogleFinanceMarketsLiveHtmlResultInfo`

Defined in: main.ts:91948

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md)

#### Returns

`SerpGoogleFinanceMarketsLiveHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:91940

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:91944

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:91942

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:91927

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:91935

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:91933

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:91931

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:91929

type of element

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceMarketsLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91957

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:91985

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceMarketsLiveHtmlResultInfo`

Defined in: main.ts:91978

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceMarketsLiveHtmlResultInfo`
