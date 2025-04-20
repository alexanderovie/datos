[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataItem

# Class: OnPageMicrodataItem

Defined in: main.ts:184210

## Implements

- [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageMicrodataItem**(`data?`): `OnPageMicrodataItem`

Defined in: main.ts:184218

#### Parameters

##### data?

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

#### Returns

`OnPageMicrodataItem`

## Properties

### inspection\_info?

> `optional` **inspection\_info**: [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

Defined in: main.ts:184214

information related to microdata validation

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`inspection_info`](../interfaces/IOnPageMicrodataItem.md#inspection_info)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:184212

type of element

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`type`](../interfaces/IOnPageMicrodataItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:184227

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:184245

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageMicrodataItem`

Defined in: main.ts:184238

#### Parameters

##### data

`any`

#### Returns

`OnPageMicrodataItem`
