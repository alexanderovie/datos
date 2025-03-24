[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

Defined in: main.ts:34207

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RelatedImageSearchesElement**(`data`?): `RelatedImageSearchesElement`

Defined in: main.ts:34222

#### Parameters

##### data?

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

#### Returns

`RelatedImageSearchesElement`

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:34213

alt tag of the image

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`alt`](../interfaces/IRelatedImageSearchesElement.md#alt)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:34218

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`image_url`](../interfaces/IRelatedImageSearchesElement.md#image_url)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34211

title of a given link element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`title`](../interfaces/IRelatedImageSearchesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34209

type of element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`type`](../interfaces/IRelatedImageSearchesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34215

relevant URL

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`url`](../interfaces/IRelatedImageSearchesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34231

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34252

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RelatedImageSearchesElement`

Defined in: main.ts:34245

#### Parameters

##### data

`any`

#### Returns

`RelatedImageSearchesElement`
