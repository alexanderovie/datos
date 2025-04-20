[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesItem

# Interface: IBusinessDataGoogleHotelSearchesItem

Defined in: main.ts:229720

## Indexable

\[`key`: `string`\]: `any`

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:229726

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:229735

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

Defined in: main.ts:229737

GPS coordinates of the hotel’s location

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:229741

featured images for a hotel

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

Defined in: main.ts:229743

hotel price

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

Defined in: main.ts:229739

hotel reviews and rating information

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:229731

hotel class rating
class rating that ranges between 1-5 stars

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229728

title of the hotel

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229722

type of element
