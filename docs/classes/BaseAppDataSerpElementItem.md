[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseAppDataSerpElementItem

# Class: BaseAppDataSerpElementItem

Defined in: main.ts:24020

## Extended by

- [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)
- [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)
- [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)
- [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)
- [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)
- [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

## Implements

- [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

## Constructors

### Constructor

> **new BaseAppDataSerpElementItem**(`data?`): `BaseAppDataSerpElementItem`

Defined in: main.ts:24040

#### Parameters

##### data?

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

#### Returns

`BaseAppDataSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24038

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24032

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`position`](../interfaces/IBaseAppDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24028

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24025

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rank_group`](../interfaces/IBaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:24036

average rating of the app

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rating`](../interfaces/IBaseAppDataSerpElementItem.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24034

title of the app

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`title`](../interfaces/IBaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24022

type of element

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`type`](../interfaces/IBaseAppDataSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:24050

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:24098

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseAppDataSerpElementItem`

Defined in: main.ts:24061

#### Parameters

##### data

`any`

#### Returns

`BaseAppDataSerpElementItem`
