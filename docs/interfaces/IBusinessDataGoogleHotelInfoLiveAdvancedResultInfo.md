[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

Defined in: main.ts:232619

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

Defined in: main.ts:232653

information about the hotel

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:232648

hotel address
physical address of the hotel

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:232631

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:232636

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:232624

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:232628

language code in a POST array

***

### location?

> `optional` **location**: [`Location`](../classes/Location.md)

Defined in: main.ts:232656

information about the hotel location
information about the location where the hotel is located

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:232626

location code in a POST array

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:232662

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:232651

hotel phone number
contact phone number of the hotel

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

Defined in: main.ts:232665

pricing details of the hotel entity
contains information about the hotel’s prices

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

Defined in: main.ts:232659

hotel reviews by criteria
information about reviews of the hotel entity

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:232642

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

***

### stars\_description?

> `optional` **stars\_description**: `string`

Defined in: main.ts:232645

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:232639

hotel title
the title of the hotel entity for which the results are collected
