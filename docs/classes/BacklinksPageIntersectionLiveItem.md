[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionLiveItem

# Class: BacklinksPageIntersectionLiveItem

Defined in: main.ts:171292

## Implements

- [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksPageIntersectionLiveItem**(`data?`): `BacklinksPageIntersectionLiveItem`

Defined in: main.ts:171301

#### Parameters

##### data?

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

#### Returns

`BacklinksPageIntersectionLiveItem`

## Properties

### page\_intersection?

> `optional` **page\_intersection**: `object`

Defined in: main.ts:171295

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index Signature

\[`key`: `string`\]: [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)[]

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`page_intersection`](../interfaces/IBacklinksPageIntersectionLiveItem.md#page_intersection)

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

Defined in: main.ts:171297

contains the page intersections summary

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksPageIntersectionLiveItem.md#summary)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:171310

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:171334

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksPageIntersectionLiveItem`

Defined in: main.ts:171327

#### Parameters

##### data

`any`

#### Returns

`BacklinksPageIntersectionLiveItem`
