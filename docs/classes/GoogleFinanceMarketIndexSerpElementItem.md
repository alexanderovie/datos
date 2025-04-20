[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceMarketIndexSerpElementItem

# Class: GoogleFinanceMarketIndexSerpElementItem

Defined in: main.ts:94918

## Extends

- [`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md)

## Implements

- [`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceMarketIndexSerpElementItem**(`data?`): `GoogleFinanceMarketIndexSerpElementItem`

Defined in: main.ts:94934

#### Parameters

##### data?

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md)

#### Returns

`GoogleFinanceMarketIndexSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`constructor`](BaseGoogleFinanceTickerSearchSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22461

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceTickerSearchSerpElementItem.md#_discriminator)

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22444

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`displayed_name`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#displayed_name)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`displayed_name`](BaseGoogleFinanceTickerSearchSerpElementItem.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22441

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`identifier`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#identifier)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](BaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### index\_value?

> `optional` **index\_value**: `number`

Defined in: main.ts:94927

value of the market index
numerical value of the index at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`index_value`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#index_value)

***

### index\_value\_delta?

> `optional` **index\_value\_delta**: `number`

Defined in: main.ts:94930

change in value of the market index
change in the index_value at a given timestamp

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`index_value_delta`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#index_value_delta)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22449

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`location`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#location)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](BaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### market\_identifier?

> `optional` **market\_identifier**: `string`

Defined in: main.ts:94924

market identifier
example: INDEXDB

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`market_identifier`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#market_identifier)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22459

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`percentage_delta`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#percentage_delta)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](BaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22437

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_absolute`](BaseGoogleFinanceTickerSearchSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22434

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](BaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### ticker?

> `optional` **ticker**: `string`

Defined in: main.ts:94921

ticker of the market index
example: DAX

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`ticker`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#ticker)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22457

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`timestamp`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#timestamp)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](BaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22452

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`trend`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#trend)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](BaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22430

type of element

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](BaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22446

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceMarketIndexSerpElementItem`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md).[`url`](../interfaces/IGoogleFinanceMarketIndexSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](BaseGoogleFinanceTickerSearchSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:94939

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`init`](BaseGoogleFinanceTickerSearchSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:94960

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`toJSON`](BaseGoogleFinanceTickerSearchSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceMarketIndexSerpElementItem`

Defined in: main.ts:94953

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceMarketIndexSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`fromJS`](BaseGoogleFinanceTickerSearchSerpElementItem.md#fromjs)
