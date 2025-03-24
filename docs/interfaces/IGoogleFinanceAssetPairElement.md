[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceAssetPairElement

# Interface: IGoogleFinanceAssetPairElement

Defined in: main.ts:87878

## Indexable

\[`key`: `string`\]: `any`

## Properties

### base\_display\_name?

> `optional` **base\_display\_name**: `string`

Defined in: main.ts:87889

full name of the base asset in a pair
example: Euro

***

### base\_symbol?

> `optional` **base\_symbol**: `string`

Defined in: main.ts:87883

identifier of the base asset in a pair
example: EUR

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:87904

name of the market index as displayed on Google Finance
example: CAC 40

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:87901

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:87909

location of the market index
example: Europe/Paris

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:87919

percentage of change in value of the market index

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:87894

value of the base asset compared to the quote asset

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:87897

change in price
change in price at a given timestamp

***

### quote\_display\_name?

> `optional` **quote\_display\_name**: `string`

Defined in: main.ts:87892

full name of the base asset in a pair
example: Euro

***

### quote\_symbol?

> `optional` **quote\_symbol**: `string`

Defined in: main.ts:87886

identifier of the quote asset in a pair
example: USD

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:87917

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:87912

growth trend of the market index
possible values: up, down, stable

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87880

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:87906

URL to the page of the market index on Google Finance
