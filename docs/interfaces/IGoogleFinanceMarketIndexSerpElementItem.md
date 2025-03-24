[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleFinanceMarketIndexSerpElementItem

# Interface: IGoogleFinanceMarketIndexSerpElementItem

Defined in: main.ts:94863

## Extends

- [`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22535

name of the market index as displayed on Google Finance
example: CAC 40

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`displayed_name`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22532

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### index\_value?

> `optional` **index\_value**: `number`

Defined in: main.ts:94872

value of the market index
numerical value of the index at a given timestamp

***

### index\_value\_delta?

> `optional` **index\_value\_delta**: `number`

Defined in: main.ts:94875

change in value of the market index
change in the index_value at a given timestamp

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22540

location of the market index
example: Europe/Paris

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### market\_identifier?

> `optional` **market\_identifier**: `string`

Defined in: main.ts:94869

market identifier
example: INDEXDB

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22550

percentage of change in value of the market index

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22528

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_absolute`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22525

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:94866

ticker of the market index
example: DAX

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22548

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22543

growth trend of the market index
possible values: up, down, stable

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22521

type of element

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22537

URL to the page of the market index on Google Finance

#### Inherited from

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](IBaseGoogleFinanceTickerSearchSerpElementItem.md#url)
