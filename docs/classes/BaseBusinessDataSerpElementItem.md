[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseBusinessDataSerpElementItem

# Class: BaseBusinessDataSerpElementItem

Defined in: main.ts:23346

## Extended by

- [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)
- [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)
- [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)
- [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)
- [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)
- [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)
- [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)
- [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Implements

- [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

## Constructors

### Constructor

> **new BaseBusinessDataSerpElementItem**(`data`?): `BaseBusinessDataSerpElementItem`

Defined in: main.ts:23357

#### Parameters

##### data?

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

#### Returns

`BaseBusinessDataSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23355

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23353

absolute rank among all the elements

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23351

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IBaseBusinessDataSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23348

type of element

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`type`](../interfaces/IBaseBusinessDataSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23367

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23422

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseBusinessDataSerpElementItem`

Defined in: main.ts:23375

#### Parameters

##### data

`any`

#### Returns

`BaseBusinessDataSerpElementItem`
