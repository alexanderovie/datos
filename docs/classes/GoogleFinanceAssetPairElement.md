[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceAssetPairElement

# Class: GoogleFinanceAssetPairElement

Defined in: main.ts:87882

## Implements

- [`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceAssetPairElement**(`data?`): `GoogleFinanceAssetPairElement`

Defined in: main.ts:87927

#### Parameters

##### data?

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md)

#### Returns

`GoogleFinanceAssetPairElement`

## Properties

### base\_display\_name?

> `optional` **base\_display\_name**: `string`

Defined in: main.ts:87893

full name of the base asset in a pair
example: Euro

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`base_display_name`](../interfaces/IGoogleFinanceAssetPairElement.md#base_display_name)

***

### base\_symbol?

> `optional` **base\_symbol**: `string`

Defined in: main.ts:87887

identifier of the base asset in a pair
example: EUR

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`base_symbol`](../interfaces/IGoogleFinanceAssetPairElement.md#base_symbol)

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:87908

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`displayed_name`](../interfaces/IGoogleFinanceAssetPairElement.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:87905

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`identifier`](../interfaces/IGoogleFinanceAssetPairElement.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:87913

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`location`](../interfaces/IGoogleFinanceAssetPairElement.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:87923

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`percentage_delta`](../interfaces/IGoogleFinanceAssetPairElement.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:87898

value of the base asset compared to the quote asset

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`price`](../interfaces/IGoogleFinanceAssetPairElement.md#price)

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:87901

change in price
change in price at a given timestamp

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`price_delta`](../interfaces/IGoogleFinanceAssetPairElement.md#price_delta)

***

### quote\_display\_name?

> `optional` **quote\_display\_name**: `string`

Defined in: main.ts:87896

full name of the base asset in a pair
example: Euro

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`quote_display_name`](../interfaces/IGoogleFinanceAssetPairElement.md#quote_display_name)

***

### quote\_symbol?

> `optional` **quote\_symbol**: `string`

Defined in: main.ts:87890

identifier of the quote asset in a pair
example: USD

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`quote_symbol`](../interfaces/IGoogleFinanceAssetPairElement.md#quote_symbol)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:87921

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`timestamp`](../interfaces/IGoogleFinanceAssetPairElement.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:87916

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`trend`](../interfaces/IGoogleFinanceAssetPairElement.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87884

type of element

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`type`](../interfaces/IGoogleFinanceAssetPairElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:87910

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceAssetPairElement`](../interfaces/IGoogleFinanceAssetPairElement.md).[`url`](../interfaces/IGoogleFinanceAssetPairElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:87936

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:87966

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceAssetPairElement`

Defined in: main.ts:87959

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceAssetPairElement`
