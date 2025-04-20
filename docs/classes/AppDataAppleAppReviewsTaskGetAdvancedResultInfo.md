[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataAppleAppReviewsTaskGetAdvancedResultInfo

Defined in: main.ts:220746

## Implements

- [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppReviewsTaskGetAdvancedResultInfo**(`data?`): `AppDataAppleAppReviewsTaskGetAdvancedResultInfo`

Defined in: main.ts:220782

#### Parameters

##### data?

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:220748

application id received in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:220759

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:220764

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:220778

found reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:220776

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:220756

language code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:220754

location code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:220770

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:220773

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:220752

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:220767

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:220750

type of element

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:220791

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:220823

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppReviewsTaskGetAdvancedResultInfo`

Defined in: main.ts:220816

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`
