[**Documentation**](../README.md)

***

[Documentation](../README.md) / SectionContentItemInfo

# Class: SectionContentItemInfo

Defined in: main.ts:26220

## Implements

- [`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SectionContentItemInfo()

> **new SectionContentItemInfo**(`data`?): [`SectionContentItemInfo`](SectionContentItemInfo.md)

Defined in: main.ts:26231

#### Parameters

##### data?

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md)

#### Returns

[`SectionContentItemInfo`](SectionContentItemInfo.md)

## Properties

### text?

> `optional` **text**: `string`

Defined in: main.ts:26222

content text

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`text`](../interfaces/ISectionContentItemInfo.md#text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26225

page URL.
displayed in case the text is a link anchor

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`url`](../interfaces/ISectionContentItemInfo.md#url)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:26227

contains other URLs and anchors found in the content element

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`urls`](../interfaces/ISectionContentItemInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26240

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26263

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SectionContentItemInfo`](SectionContentItemInfo.md)

Defined in: main.ts:26256

#### Parameters

##### data

`any`

#### Returns

[`SectionContentItemInfo`](SectionContentItemInfo.md)
