[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceEarningsCalendarElement

# Class: GoogleFinanceEarningsCalendarElement

Defined in: main.ts:88680

## Implements

- [`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceEarningsCalendarElement**(`data?`): `GoogleFinanceEarningsCalendarElement`

Defined in: main.ts:88695

#### Parameters

##### data?

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

#### Returns

`GoogleFinanceEarningsCalendarElement`

## Properties

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88691

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`timestamp`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88684

title of the news article

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`title`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88682

type of element

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`type`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88686

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`url`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:88704

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:88724

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceEarningsCalendarElement`

Defined in: main.ts:88717

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceEarningsCalendarElement`
