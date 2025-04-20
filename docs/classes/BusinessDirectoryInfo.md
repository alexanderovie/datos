[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDirectoryInfo

# Class: BusinessDirectoryInfo

Defined in: main.ts:226300

## Implements

- [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDirectoryInfo**(`data?`): `BusinessDirectoryInfo`

Defined in: main.ts:226311

#### Parameters

##### data?

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

#### Returns

`BusinessDirectoryInfo`

## Properties

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:226307

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`items`](../interfaces/IBusinessDirectoryInfo.md#items)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:226303

title of the element
domain of the online menu system

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`title`](../interfaces/IBusinessDirectoryInfo.md#title)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:226320

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:226342

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDirectoryInfo`

Defined in: main.ts:226335

#### Parameters

##### data

`any`

#### Returns

`BusinessDirectoryInfo`
