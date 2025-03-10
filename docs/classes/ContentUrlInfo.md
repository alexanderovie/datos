[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentUrlInfo

# Class: ContentUrlInfo

Defined in: main.ts:26292

## Implements

- [`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentUrlInfo()

> **new ContentUrlInfo**(`data`?): [`ContentUrlInfo`](ContentUrlInfo.md)

Defined in: main.ts:26300

#### Parameters

##### data?

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)

## Properties

### anchor\_text?

> `optional` **anchor\_text**: `string`

Defined in: main.ts:26296

text of the URL’s anchor

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`anchor_text`](../interfaces/IContentUrlInfo.md#anchor_text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26294

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`url`](../interfaces/IContentUrlInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26309

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26327

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentUrlInfo`](ContentUrlInfo.md)

Defined in: main.ts:26320

#### Parameters

##### data

`any`

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)
