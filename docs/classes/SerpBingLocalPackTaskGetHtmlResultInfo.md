[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetHtmlResultInfo

# Class: SerpBingLocalPackTaskGetHtmlResultInfo

Defined in: main.ts:70605

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingLocalPackTaskGetHtmlResultInfo**(`data`?): `SerpBingLocalPackTaskGetHtmlResultInfo`

Defined in: main.ts:70629

#### Parameters

##### data?

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Returns

`SerpBingLocalPackTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:70621

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:70625

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:70623

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:70608

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:70616

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:70614

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:70612

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70610

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70638

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:70666

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingLocalPackTaskGetHtmlResultInfo`

Defined in: main.ts:70659

#### Parameters

##### data

`any`

#### Returns

`SerpBingLocalPackTaskGetHtmlResultInfo`
