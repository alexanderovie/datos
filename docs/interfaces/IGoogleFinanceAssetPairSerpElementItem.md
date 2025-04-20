[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceAssetPairSerpElementItem

# Interface: IGoogleFinanceAssetPairSerpElementItem

Defined in: main.ts:94824

## Extends

- [`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### base\_display\_name?

> `optional` **base\_display\_name**: `string`

Defined in: main.ts:94833

full name of the base asset in a pair
example: Euro

***

### base\_symbol?

> `optional` **base\_symbol**: `string`

Defined in: main.ts:94827

identifier of the base asset in a pair
example: EUR

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22543

name of the market index as displayed on Google Finance
example: CAC 40

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`displayed_name`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22540

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22548

location of the market index
example: Europe/Paris

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22558

percentage of change in value of the market index

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:94838

value of the base asset compared to the quote asset

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:94841

change in price
change in price at a given timestamp

***

### quote\_display\_name?

> `optional` **quote\_display\_name**: `string`

Defined in: main.ts:94836

full name of the base asset in a pair
example: Euro

***

### quote\_symbol?

> `optional` **quote\_symbol**: `string`

Defined in: main.ts:94830

identifier of the quote asset in a pair
example: USD

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22536

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_absolute`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22533

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22556

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22551

growth trend of the market index
possible values: up, down, stable

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22529

type of element

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22545

URL to the page of the market index on Google Finance

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#url)
