[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

Defined in: main.ts:180500

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageDuplicateTagsItem**(`data`?): `OnPageDuplicateTagsItem`

Defined in: main.ts:180510

#### Parameters

##### data?

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

#### Returns

`OnPageDuplicateTagsItem`

## Properties

### accumulator?

> `optional` **accumulator**: `string`

Defined in: main.ts:180502

contains the value of duplicated tag

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

***

### pages?

> `optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:180506

pages with duplicate tags

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`pages`](../interfaces/IOnPageDuplicateTagsItem.md#pages)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:180504

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md).[`total_count`](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180519

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:180542

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageDuplicateTagsItem`

Defined in: main.ts:180535

#### Parameters

##### data

`any`

#### Returns

`OnPageDuplicateTagsItem`
