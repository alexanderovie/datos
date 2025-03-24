[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGooglePlaySearchOrganicSerpElementItem

# Class: AppDataGooglePlaySearchOrganicSerpElementItem

Defined in: main.ts:133396

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGooglePlaySearchOrganicSerpElementItem**(`data`?): `AppDataGooglePlaySearchOrganicSerpElementItem`

Defined in: main.ts:133416

#### Parameters

##### data?

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Returns

`AppDataGooglePlaySearchOrganicSerpElementItem`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24030

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

***

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:133398

id of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)

***

### developer?

> `optional` **developer**: `string`

Defined in: main.ts:133410

name of the app developer

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)

***

### developer\_url?

> `optional` **developer\_url**: `string`

Defined in: main.ts:133412

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:133402

URL to the app icon

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:133406

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24024

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:133408

price of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24020

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24017

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:24028

average rating of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:133404

the total number of reviews of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24026

title of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24014

type of element

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`type`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:133400

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:133421

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:133446

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGooglePlaySearchOrganicSerpElementItem`

Defined in: main.ts:133439

#### Parameters

##### data

`any`

#### Returns

`AppDataGooglePlaySearchOrganicSerpElementItem`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)
