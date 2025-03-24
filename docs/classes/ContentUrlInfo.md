[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentUrlInfo

# Class: ContentUrlInfo

Defined in: main.ts:26719

## Implements

- [`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentUrlInfo**(`data`?): `ContentUrlInfo`

Defined in: main.ts:26727

#### Parameters

##### data?

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

#### Returns

`ContentUrlInfo`

## Properties

### anchor\_text?

> `optional` **anchor\_text**: `string`

Defined in: main.ts:26723

text of the URL’s anchor

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`anchor_text`](../interfaces/IContentUrlInfo.md#anchor_text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26721

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`url`](../interfaces/IContentUrlInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26736

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26754

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentUrlInfo`

Defined in: main.ts:26747

#### Parameters

##### data

`any`

#### Returns

`ContentUrlInfo`
