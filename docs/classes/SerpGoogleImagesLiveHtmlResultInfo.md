[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveHtmlResultInfo

# Class: SerpGoogleImagesLiveHtmlResultInfo

Defined in: main.ts:55266

## Implements

- [`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleImagesLiveHtmlResultInfo**(`data?`): `SerpGoogleImagesLiveHtmlResultInfo`

Defined in: main.ts:55290

#### Parameters

##### data?

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md)

#### Returns

`SerpGoogleImagesLiveHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:55282

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:55286

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:55284

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:55269

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:55277

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:55275

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:55273

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:55271

type of element

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:55299

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:55327

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleImagesLiveHtmlResultInfo`

Defined in: main.ts:55320

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleImagesLiveHtmlResultInfo`
