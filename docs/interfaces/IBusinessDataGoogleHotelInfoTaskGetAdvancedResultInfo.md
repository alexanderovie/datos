[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

Defined in: main.ts:231651

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

Defined in: main.ts:231685

information about the hotel

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:231680

hotel address
physical address of the hotel

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:231663

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:231668

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:231656

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:231660

language code in a POST array

***

### location?

> `optional` **location**: [`HotelLocationInfo`](../classes/HotelLocationInfo.md)

Defined in: main.ts:231688

information about the hotel location
information about the location where the hotel is located

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:231658

location code in a POST array

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:231694

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:231683

hotel phone number
contact phone number of the hotel

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

Defined in: main.ts:231697

pricing details of the hotel entity
contains information about the hotel’s prices

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

Defined in: main.ts:231691

hotel reviews by criteria
information about reviews of the hotel entity

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:231674

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

***

### stars\_description?

> `optional` **stars\_description**: `string`

Defined in: main.ts:231677

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:231671

hotel title
the title of the hotel entity for which the results are collected
