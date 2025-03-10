[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

Defined in: main.ts:217910

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:217912

application id received in a POST array

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:217923

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:217928

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:217942

found reviews

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:217940

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:217920

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:217918

location code in a POST array

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:217934

rating of the app
rating of the application for which the reviews are collected

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:217937

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:217916

search engine domain in a POST array

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:217931

title of the app
title of the application for which the reviews are collected

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:217914

type of element
