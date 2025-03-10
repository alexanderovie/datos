[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceMarketIndexElement

# Interface: IGoogleFinanceMarketIndexElement

Defined in: main.ts:87596

## Indexable

\[`key`: `string`\]: `any`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:87617

name of the market index as displayed on Google Finance
example: CAC 40

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:87614

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

***

### index\_value?

> `optional` **index\_value**: `number`

Defined in: main.ts:87607

value of the market index
numerical value of the index at a given timestamp

***

### index\_value\_delta?

> `optional` **index\_value\_delta**: `number`

Defined in: main.ts:87610

change in value of the market index
change in the index_value at a given timestamp

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:87622

location of the market index
example: Europe/Paris

***

### market\_identifier?

> `optional` **market\_identifier**: `string`

Defined in: main.ts:87604

market identifier
example: INDEXDB

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:87632

percentage of change in value of the market index

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:87601

ticker of the market index
example: DAX

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:87630

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:87625

growth trend of the market index
possible values: up, down, stable

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87598

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:87619

URL to the page of the market index on Google Finance
