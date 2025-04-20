[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketInstrumentElement

# Class: GoogleFinanceMarketInstrumentElement

Defined in: main.ts:88176

## Implements

- [`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketInstrumentElement**(`data?`): `GoogleFinanceMarketInstrumentElement`

Defined in: main.ts:88215

#### Parameters

##### data?

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md)

#### Returns

`GoogleFinanceMarketInstrumentElement`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:88196

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`displayed_name`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:88193

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`identifier`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:88201

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`location`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:88211

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`percentage_delta`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:88183

value of the base asset compared to the quote asset

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price)

***

### price\_currency?

> `optional` **price\_currency**: `string`

Defined in: main.ts:88189

price currency
example: USD

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price_currency`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price_currency)

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:88186

change in price
change in price at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`price_delta`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#price_delta)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:88181

ticker of the market index
example: DAX

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`ticker`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#ticker)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88209

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`timestamp`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:88204

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`trend`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88178

type of element

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`type`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88198

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceMarketInstrumentElement`](../interfaces/IGoogleFinanceMarketInstrumentElement.md).[`url`](../interfaces/IGoogleFinanceMarketInstrumentElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:88224

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:88252

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketInstrumentElement`

Defined in: main.ts:88245

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketInstrumentElement`
