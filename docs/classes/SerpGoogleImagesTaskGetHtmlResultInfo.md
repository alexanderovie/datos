[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetHtmlResultInfo

# Class: SerpGoogleImagesTaskGetHtmlResultInfo

Defined in: main.ts:54158

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleImagesTaskGetHtmlResultInfo**(`data`?): `SerpGoogleImagesTaskGetHtmlResultInfo`

Defined in: main.ts:54182

#### Parameters

##### data?

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Returns

`SerpGoogleImagesTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:54174

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:54178

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:54176

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:54161

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:54169

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:54167

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:54165

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:54163

type of element

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54191

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:54219

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleImagesTaskGetHtmlResultInfo`

Defined in: main.ts:54212

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleImagesTaskGetHtmlResultInfo`
