[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleFinanceTickerSearchSerpElementItem

# Class: BaseGoogleFinanceTickerSearchSerpElementItem

Defined in: main.ts:22420

## Extended by

- [`GoogleFinanceAssetPairSerpElementItem`](GoogleFinanceAssetPairSerpElementItem.md)
- [`GoogleFinanceMarketInstrumentSerpElementItem`](GoogleFinanceMarketInstrumentSerpElementItem.md)
- [`GoogleFinanceMarketIndexSerpElementItem`](GoogleFinanceMarketIndexSerpElementItem.md)

## Implements

- [`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md)

## Constructors

### Constructor

> **new BaseGoogleFinanceTickerSearchSerpElementItem**(`data`?): `BaseGoogleFinanceTickerSearchSerpElementItem`

Defined in: main.ts:22455

#### Parameters

##### data?

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md)

#### Returns

`BaseGoogleFinanceTickerSearchSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22453

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22436

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`displayed_name`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#displayed_name)

***

### identifier?

> `optional` **identifier**: `string`

Defined in: main.ts:22433

identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22441

location of the market index
example: Europe/Paris

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22451

percentage of change in value of the market index

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22429

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22426

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22449

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22444

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22422

type of element

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22438

URL to the page of the market index on Google Finance

#### Implementation of

[`IBaseGoogleFinanceTickerSearchSerpElementItem`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](../interfaces/IBaseGoogleFinanceTickerSearchSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22465

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22502

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseGoogleFinanceTickerSearchSerpElementItem`

Defined in: main.ts:22480

#### Parameters

##### data

`any`

#### Returns

`BaseGoogleFinanceTickerSearchSerpElementItem`
