[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceNewsElement

# Class: GoogleFinanceNewsElement

Defined in: main.ts:87959

## Implements

- [`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceNewsElement()

> **new GoogleFinanceNewsElement**(`data`?): [`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)

Defined in: main.ts:87983

#### Parameters

##### data?

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md)

#### Returns

[`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:87971

featured image URL
URL of the news article’s featured image

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`image_url`](../interfaces/IGoogleFinanceNewsElement.md#image_url)

***

### quotes?

> `optional` **quotes**: [`GoogleFinanceAssetPairElement`](GoogleFinanceAssetPairElement.md)[]

Defined in: main.ts:87979

market indexes quoted in the news article
information about market indexes quoted in the google_finance_news_element

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`quotes`](../interfaces/IGoogleFinanceNewsElement.md#quotes)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:87968

name of the news source
name of the website where the news article is published

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`source`](../interfaces/IGoogleFinanceNewsElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:87976

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`timestamp`](../interfaces/IGoogleFinanceNewsElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:87963

title of the news article

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`title`](../interfaces/IGoogleFinanceNewsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87961

type of element

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`type`](../interfaces/IGoogleFinanceNewsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:87965

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceNewsElement`](../interfaces/IGoogleFinanceNewsElement.md).[`url`](../interfaces/IGoogleFinanceNewsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87992

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88019

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)

Defined in: main.ts:88012

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceNewsElement`](GoogleFinanceNewsElement.md)
