[**Documentation**](../README.md)

***

[Documentation](../README.md) / SectionContentItemInfo

# Class: SectionContentItemInfo

Defined in: main.ts:26559

## Implements

- [`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SectionContentItemInfo**(`data`?): `SectionContentItemInfo`

Defined in: main.ts:26571

#### Parameters

##### data?

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md)

#### Returns

`SectionContentItemInfo`

## Properties

### text?

> `optional` **text**: `string`

Defined in: main.ts:26562

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`text`](../interfaces/ISectionContentItemInfo.md#text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26565

page URL.
displayed in case the text is a link anchor

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`url`](../interfaces/ISectionContentItemInfo.md#url)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:26567

contains other URLs and anchors found in the content element

#### Implementation of

[`ISectionContentItemInfo`](../interfaces/ISectionContentItemInfo.md).[`urls`](../interfaces/ISectionContentItemInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26580

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26603

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SectionContentItemInfo`

Defined in: main.ts:26596

#### Parameters

##### data

`any`

#### Returns

`SectionContentItemInfo`
