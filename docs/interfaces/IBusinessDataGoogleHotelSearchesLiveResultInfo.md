[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesLiveResultInfo

# Interface: IBusinessDataGoogleHotelSearchesLiveResultInfo

Defined in: main.ts:229980

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:229990

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:229995

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](../classes/BusinessDataGoogleHotelSearchesItem.md)[]

Defined in: main.ts:230001

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:229998

item types
the number of items in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:229983

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:229987

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:229985

location code in a POST array
