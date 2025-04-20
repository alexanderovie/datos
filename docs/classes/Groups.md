[**Documentation**](../README.md)

***

[Documentation](../README.md) / Groups

# Class: Groups

Defined in: main.ts:97010

## Implements

- [`IGroups`](../interfaces/IGroups.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Groups**(`data?`): `Groups`

Defined in: main.ts:97022

#### Parameters

##### data?

[`IGroups`](../interfaces/IGroups.md)

#### Returns

`Groups`

## Properties

### categories?

> `optional` **categories**: [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)[]

Defined in: main.ts:97018

technology categories in this group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`categories`](../interfaces/IGroups.md#categories)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:97014

id of the technology group
example:
marketing, sales

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`id`](../interfaces/IGroups.md#id)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:97016

title of the technology group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`title`](../interfaces/IGroups.md#title)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:97031

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:97054

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Groups`

Defined in: main.ts:97047

#### Parameters

##### data

`any`

#### Returns

`Groups`
