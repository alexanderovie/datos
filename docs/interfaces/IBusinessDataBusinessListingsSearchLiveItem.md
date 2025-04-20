[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveItem

# Interface: IBusinessDataBusinessListingsSearchLiveItem

Defined in: main.ts:223810

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:223830

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:223839

address of the business entity

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

Defined in: main.ts:223841

object containing address components of the business entity

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

Defined in: main.ts:223872

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:223824

business category
Google My Business general category that best describes the services provided by the business entity

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:223827

global category IDs
universal category IDs that do not change based on the selected country

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:223911

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:223834

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

***

### contact\_info?

> `optional` **contact\_info**: [`BusinessDataContactInfo`](../classes/BusinessDataContactInfo.md)[]

Defined in: main.ts:223908

available contacts of the business
list of contacts to interact with the business

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:223821

description of the element in SERP
the description of the business entity for which the results are collected

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:223851

domain of the business entity

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:223837

the unique identifier of the element in SERP
learn more about the identifier in this help center article

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:223921

date and time when our crawler found the business listing element for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-03-11 10:04:11 +00:00

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:223887

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:223869

shows whether the entity is verified by its owner on Google Maps

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:223916

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:223863

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

Defined in: main.ts:223905

available interactions with the business
list of options to interact with the business directly from search results

***

### logo?

> `optional` **logo**: `string`

Defined in: main.ts:223853

URL of the logo featured in Google My Business profile

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:223867

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:223855

URL of the main image featured in Google My Business profile

***

### original\_title?

> `optional` **original\_title**: `string`

Defined in: main.ts:223818

original title of the element
original title not translated by Google

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

Defined in: main.ts:223896

related business entities

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:223847

phone number of the business entity

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:223845

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

***

### place\_topics?

> `optional` **place\_topics**: `object`

Defined in: main.ts:223880

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index Signature

\[`key`: `string`\]: `number`

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

Defined in: main.ts:223902

popular times
information related to busy hours of the business entity

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:223891

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:223883

the element’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:223894

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:223859

additional information on the business entity

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:223815

title of the element in SERP
the name of the business entity for which the results are collected

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:223857

total count of images featured in Google My Business profile

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:223812

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:223849

absolute url of the business entity

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](../classes/WorkTime.md)

Defined in: main.ts:223899

work time details
information related to operational hours of the business entity
