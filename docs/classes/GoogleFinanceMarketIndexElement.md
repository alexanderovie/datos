[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketIndexElement

# Class: GoogleFinanceMarketIndexElement

Defined in: main.ts:88036

## Implements

- [`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketIndexElement**(`data?`): `GoogleFinanceMarketIndexElement`

Defined in: main.ts:88076

#### Parameters

##### data?

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md)

#### Returns

`GoogleFinanceMarketIndexElement`

## Properties

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:88057

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`displayed_name`](../interfaces/IGoogleFinanceMarketIndexElement.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:88054

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`identifier`](../interfaces/IGoogleFinanceMarketIndexElement.md#identifier)

***

### index\_value?

> `optional` **index\_value**: `number`

Defined in: main.ts:88047

value of the market index
numerical value of the index at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`index_value`](../interfaces/IGoogleFinanceMarketIndexElement.md#index_value)

***

### index\_value\_delta?

> `optional` **index\_value\_delta**: `number`

Defined in: main.ts:88050

change in value of the market index
change in the index_value at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`index_value_delta`](../interfaces/IGoogleFinanceMarketIndexElement.md#index_value_delta)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:88062

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`location`](../interfaces/IGoogleFinanceMarketIndexElement.md#location)

***

### market\_identifier?

> `optional` **market\_identifier**: `string`

Defined in: main.ts:88044

market identifier
example: INDEXDB

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`market_identifier`](../interfaces/IGoogleFinanceMarketIndexElement.md#market_identifier)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:88072

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`percentage_delta`](../interfaces/IGoogleFinanceMarketIndexElement.md#percentage_delta)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:88041

ticker of the market index
example: DAX

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`ticker`](../interfaces/IGoogleFinanceMarketIndexElement.md#ticker)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88070

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`timestamp`](../interfaces/IGoogleFinanceMarketIndexElement.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:88065

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`trend`](../interfaces/IGoogleFinanceMarketIndexElement.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88038

type of element

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`type`](../interfaces/IGoogleFinanceMarketIndexElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88059

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceMarketIndexElement`](../interfaces/IGoogleFinanceMarketIndexElement.md).[`url`](../interfaces/IGoogleFinanceMarketIndexElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:88085

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:88113

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketIndexElement`

Defined in: main.ts:88106

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketIndexElement`
