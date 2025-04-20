[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelPriceItemInfo

# Interface: IHotelPriceItemInfo

Defined in: main.ts:229484

## Indexable

\[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:229493

price currency
USD is applied by default, unless specified in the POST array

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:229499

third-party domain
domain of the third-party website page with pricing information

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

Defined in: main.ts:229507

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:229503

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

***

### offers?

> `optional` **offers**: [`HotelInfoPriceOffer`](../classes/HotelInfoPriceOffer.md)[]

Defined in: main.ts:229509

featured price offers

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:229490

price per night

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229488

title of the hotel

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229486

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:229496

third-party page url
URL to the third-party website page with pricing information
