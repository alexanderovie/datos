[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalKeywordDataLiveItem

# Interface: IDataforseoLabsGoogleHistoricalKeywordDataLiveItem

Defined in: main.ts:122917

## Indexable

\[`key`: `string`\]: `any`

## Properties

### history?

> `optional` **history**: [`History`](../classes/History.md)[]

Defined in: main.ts:122929

array of objects with historical data for the keyword

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:122922

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122927

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122925

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122919

search engine type
