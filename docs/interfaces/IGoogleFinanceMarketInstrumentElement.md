[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceMarketInstrumentElement

# Interface: IGoogleFinanceMarketInstrumentElement

Defined in: main.ts:87735

## Indexable

\[`key`: `string`\]: `any`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:87755

name of the market index as displayed on Google Finance
example: CAC 40

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:87752

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:87760

location of the market index
example: Europe/Paris

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:87770

percentage of change in value of the market index

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:87742

value of the base asset compared to the quote asset

***

### price\_currency?

> `optional` **price\_currency**: `string`

Defined in: main.ts:87748

price currency
example: USD

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:87745

change in price
change in price at a given timestamp

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:87740

ticker of the market index
example: DAX

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:87768

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:87763

growth trend of the market index
possible values: up, down, stable

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87737

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:87757

URL to the page of the market index on Google Finance
