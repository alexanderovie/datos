[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveHtmlResultInfo

# Class: SerpGoogleLocalFinderLiveHtmlResultInfo

Defined in: main.ts:47913

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleLocalFinderLiveHtmlResultInfo**(`data?`): `SerpGoogleLocalFinderLiveHtmlResultInfo`

Defined in: main.ts:47937

#### Parameters

##### data?

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Returns

`SerpGoogleLocalFinderLiveHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:47929

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:47933

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:47931

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:47916

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:47924

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:47922

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:47920

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:47918

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:47946

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:47974

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleLocalFinderLiveHtmlResultInfo`

Defined in: main.ts:47967

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleLocalFinderLiveHtmlResultInfo`
