[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleFinanceTickerSearchSerpElementItem

# Interface: IBaseGoogleFinanceTickerSearchSerpElementItem

Defined in: main.ts:22527

## Extended by

- [`IGoogleFinanceAssetPairSerpElementItem`](IGoogleFinanceAssetPairSerpElementItem.md)
- [`IGoogleFinanceMarketInstrumentSerpElementItem`](IGoogleFinanceMarketInstrumentSerpElementItem.md)
- [`IGoogleFinanceMarketIndexSerpElementItem`](IGoogleFinanceMarketIndexSerpElementItem.md)

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22543

name of the market index as displayed on Google Finance
example: CAC 40

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22540

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22548

location of the market index
example: Europe/Paris

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22558

percentage of change in value of the market index

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22536

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22533

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22556

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22551

growth trend of the market index
possible values: up, down, stable

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22529

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22545

URL to the page of the market index on Google Finance
