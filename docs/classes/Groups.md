[**Documentation**](../README.md)

***

[Documentation](../README.md) / Groups

# Class: Groups

Defined in: main.ts:94995

## Implements

- [`IGroups`](../interfaces/IGroups.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Groups()

> **new Groups**(`data`?): [`Groups`](Groups.md)

Defined in: main.ts:95007

#### Parameters

##### data?

[`IGroups`](../interfaces/IGroups.md)

#### Returns

[`Groups`](Groups.md)

## Properties

### categories?

> `optional` **categories**: [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)[]

Defined in: main.ts:95003

technology categories in this group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`categories`](../interfaces/IGroups.md#categories)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:94999

id of the technology group
example:
marketing, sales

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`id`](../interfaces/IGroups.md#id)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:95001

title of the technology group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`title`](../interfaces/IGroups.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:95016

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:95039

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Groups`](Groups.md)

Defined in: main.ts:95032

#### Parameters

##### data

`any`

#### Returns

[`Groups`](Groups.md)
