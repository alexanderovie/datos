[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceEarningsCalendarElement

# Class: GoogleFinanceEarningsCalendarElement

Defined in: main.ts:88141

## Implements

- [`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFinanceEarningsCalendarElement()

> **new GoogleFinanceEarningsCalendarElement**(`data`?): [`GoogleFinanceEarningsCalendarElement`](GoogleFinanceEarningsCalendarElement.md)

Defined in: main.ts:88156

#### Parameters

##### data?

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

#### Returns

[`GoogleFinanceEarningsCalendarElement`](GoogleFinanceEarningsCalendarElement.md)

## Properties

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88152

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`timestamp`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88145

title of the news article

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`title`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88143

type of element

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`type`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88147

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`url`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88165

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88185

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFinanceEarningsCalendarElement`](GoogleFinanceEarningsCalendarElement.md)

Defined in: main.ts:88178

#### Parameters

##### data

`any`

#### Returns

[`GoogleFinanceEarningsCalendarElement`](GoogleFinanceEarningsCalendarElement.md)
