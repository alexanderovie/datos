[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceEarningsCalendarElement

# Class: GoogleFinanceEarningsCalendarElement

Defined in: main.ts:88568

## Implements

- [`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceEarningsCalendarElement**(`data`?): `GoogleFinanceEarningsCalendarElement`

Defined in: main.ts:88583

#### Parameters

##### data?

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md)

#### Returns

`GoogleFinanceEarningsCalendarElement`

## Properties

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:88579

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`timestamp`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88572

title of the news article

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`title`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88570

type of element

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`type`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:88574

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceEarningsCalendarElement`](../interfaces/IGoogleFinanceEarningsCalendarElement.md).[`url`](../interfaces/IGoogleFinanceEarningsCalendarElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88592

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88612

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceEarningsCalendarElement`

Defined in: main.ts:88605

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceEarningsCalendarElement`
