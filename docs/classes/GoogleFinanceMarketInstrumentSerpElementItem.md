[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketInstrumentSerpElementItem

# Class: GoogleFinanceMarketInstrumentSerpElementItem

Defined in: main.ts:94734

## Extends

- [`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md)

## Implements

- [`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketInstrumentSerpElementItem**(`data`?): `GoogleFinanceMarketInstrumentSerpElementItem`

Defined in: main.ts:94749

#### Parameters

##### data?

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md)

#### Returns

`GoogleFinanceMarketInstrumentSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`constructor`](BaseGoogleFinanceTickerSearchSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22453

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceTickerSearchSerpElementItem.md#_discriminator)

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22436

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`displayed_name`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#displayed_name)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`displayed_name`](BaseGoogleFinanceTickerSearchSerpElementItem.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22433

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`identifier`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#identifier)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](BaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22441

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`location`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#location)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](BaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22451

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`percentage_delta`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#percentage_delta)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](BaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:94739

value of the base asset compared to the quote asset

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`price`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#price)

***

### price\_currency?

> `optional` **price\_currency**: `string`

Defined in: main.ts:94745

price currency
example: USD

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`price_currency`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#price_currency)

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:94742

change in price
change in price at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`price_delta`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#price_delta)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22429

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_absolute`](BaseGoogleFinanceTickerSearchSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22426

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](BaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:94737

ticker of the market index
example: DAX

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`ticker`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#ticker)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22449

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`timestamp`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#timestamp)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](BaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22444

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`trend`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#trend)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](BaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22422

type of element

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](BaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22438

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceMarketInstrumentSerpElementItem`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md).[`url`](../interfaces/IGoogleFinanceMarketInstrumentSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](BaseGoogleFinanceTickerSearchSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94754

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`init`](BaseGoogleFinanceTickerSearchSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94775

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`toJSON`](BaseGoogleFinanceTickerSearchSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketInstrumentSerpElementItem`

Defined in: main.ts:94768

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketInstrumentSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`fromJS`](BaseGoogleFinanceTickerSearchSerpElementItem.md#fromjs)
