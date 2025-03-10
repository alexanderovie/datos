[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

Defined in: main.ts:212949

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:212985

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:212951

application id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:212962

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:212967

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:212981

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:212978

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:212959

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:212957

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:212973

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:212975

the total number of reviews

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:212955

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:212970

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:212953

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212994

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:213026

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:213019

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)
