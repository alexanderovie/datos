[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppStoreSearchOrganicSerpElementItem

# Class: AppDataAppStoreSearchOrganicSerpElementItem

Defined in: main.ts:135784

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppStoreSearchOrganicSerpElementItem**(`data?`): `AppDataAppStoreSearchOrganicSerpElementItem`

Defined in: main.ts:135800

#### Parameters

##### data?

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

#### Returns

`AppDataAppStoreSearchOrganicSerpElementItem`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24038

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

***

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:135786

id of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#app_id)

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:135790

URL to the app icon

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#icon)

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:135794

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#is_free)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24032

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:135796

price of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24028

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24025

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:24036

average rating of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:135792

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24034

title of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24022

type of element

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`type`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:135788

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:135805

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:135828

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppStoreSearchOrganicSerpElementItem`

Defined in: main.ts:135821

#### Parameters

##### data

`any`

#### Returns

`AppDataAppStoreSearchOrganicSerpElementItem`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)
