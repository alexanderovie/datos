[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketInstrumentElement

# Class: GoogleFinanceMarketInstrumentElement

Defined in: main.ts:88064

## Implements

- [`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketInstrumentElement**(`data`?): `GoogleFinanceMarketInstrumentElement`

Defined in: main.ts:88103

#### Parameters

##### data?

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md)

#### Returns

`GoogleFinanceMarketInstrumentElement`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:88084

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`displayed_name`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:88081

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`identifier`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:88089

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`location`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:88099

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`percentage_delta`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:88071

value of the base asset compared to the quote asset

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price)

***

### price\_currency?

> `optional` **price\_currency**: `string`

Defined in: main.ts:88077

price currency
example: USD

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price_currency`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price_currency)

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:88074

change in price
change in price at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price_delta`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price_delta)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:88069

ticker of the market index
example: DAX

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`ticker`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#ticker)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88097

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`timestamp`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:88092

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`trend`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88066

type of element

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`type`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88086

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`url`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88112

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88140

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketInstrumentElement`

Defined in: main.ts:88133

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketInstrumentElement`
