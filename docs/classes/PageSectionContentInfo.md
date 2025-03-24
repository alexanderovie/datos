[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageSectionContentInfo

# Class: PageSectionContentInfo

Defined in: main.ts:184840

## Implements

- [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PageSectionContentInfo**(`data`?): `PageSectionContentInfo`

Defined in: main.ts:184852

#### Parameters

##### data?

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

#### Returns

`PageSectionContentInfo`

## Properties

### primary\_content?

> `optional` **primary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:184843

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`primary_content`](../interfaces/IPageSectionContentInfo.md#primary_content)

***

### secondary\_content?

> `optional` **secondary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:184846

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`secondary_content`](../interfaces/IPageSectionContentInfo.md#secondary_content)

***

### table\_content?

> `optional` **table\_content**: [`TableContentInfo`](TableContentInfo.md)[]

Defined in: main.ts:184848

content of the table on the page

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`table_content`](../interfaces/IPageSectionContentInfo.md#table_content)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184861

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184892

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PageSectionContentInfo`

Defined in: main.ts:184885

#### Parameters

##### data

`any`

#### Returns

`PageSectionContentInfo`
