[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelInfoPriceOffer

# Interface: IHotelInfoPriceOffer

Defined in: main.ts:229367

featured price offers

## Indexable

\[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:229376

price currency
USD is applied by default, unless specified in the POST array

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

Defined in: main.ts:229389

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

***

### max\_visitors?

> `optional` **max\_visitors**: `number`

Defined in: main.ts:229382

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

***

### offer\_images?

> `optional` **offer\_images**: `string`[]

Defined in: main.ts:229385

price offer images
URLs of the images featured in the price offer

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:229373

price per night

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229371

title of the hotel

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229369

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:229379

url of the price offer
URL to the page of the website where price offer appears
