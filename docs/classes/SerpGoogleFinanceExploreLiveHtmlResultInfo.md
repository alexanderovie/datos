[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreLiveHtmlResultInfo

# Class: SerpGoogleFinanceExploreLiveHtmlResultInfo

Defined in: main.ts:89669

## Implements

- [`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreLiveHtmlResultInfo()

> **new SerpGoogleFinanceExploreLiveHtmlResultInfo**(`data`?): [`SerpGoogleFinanceExploreLiveHtmlResultInfo`](SerpGoogleFinanceExploreLiveHtmlResultInfo.md)

Defined in: main.ts:89693

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlResultInfo`](SerpGoogleFinanceExploreLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:89685

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:89689

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:89687

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:89672

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89680

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:89678

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:89676

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:89674

type of element

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlResultInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89702

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89730

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreLiveHtmlResultInfo`](SerpGoogleFinanceExploreLiveHtmlResultInfo.md)

Defined in: main.ts:89723

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlResultInfo`](SerpGoogleFinanceExploreLiveHtmlResultInfo.md)
