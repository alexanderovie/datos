[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFinanceAssetPairSerpElementItem

# Class: GoogleFinanceAssetPairSerpElementItem

Defined in: main.ts:94758

## Extends

- [`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md)

## Implements

- [`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleFinanceAssetPairSerpElementItem**(`data?`): `GoogleFinanceAssetPairSerpElementItem`

Defined in: main.ts:94779

#### Parameters

##### data?

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md)

#### Returns

`GoogleFinanceAssetPairSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`constructor`](BaseGoogleFinanceTickerSearchSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22461

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`_discriminator`](BaseGoogleFinanceTickerSearchSerpElementItem.md#_discriminator)

***

### base\_display\_name?

> `optional` **base\_display\_name**: `string`

Defined in: main.ts:94767

full name of the base asset in a pair
example: Euro

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`base_display_name`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#base_display_name)

***

### base\_symbol?

> `optional` **base\_symbol**: `string`

Defined in: main.ts:94761

identifier of the base asset in a pair
example: EUR

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`base_symbol`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#base_symbol)

***

### displayed\_name?

> `optional` **displayed\_name**: `string`

Defined in: main.ts:22444

name of the market index as displayed on Google Finance
example: CAC 40

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`displayed_name`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#displayed_name)

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

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`identifier`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#identifier)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`identifier`](BaseGoogleFinanceTickerSearchSerpElementItem.md#identifier)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22449

location of the market index
example: Europe/Paris

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`location`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#location)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`location`](BaseGoogleFinanceTickerSearchSerpElementItem.md#location)

***

### percentage\_delta?

> `optional` **percentage\_delta**: `number`

Defined in: main.ts:22459

percentage of change in value of the market index

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`percentage_delta`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#percentage_delta)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`percentage_delta`](BaseGoogleFinanceTickerSearchSerpElementItem.md#percentage_delta)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:94772

value of the base asset compared to the quote asset

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`price`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#price)

***

### price\_delta?

> `optional` **price\_delta**: `number`

Defined in: main.ts:94775

change in price
change in price at a given timestamp

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`price_delta`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#price_delta)

***

### quote\_display\_name?

> `optional` **quote\_display\_name**: `string`

Defined in: main.ts:94770

full name of the base asset in a pair
example: Euro

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`quote_display_name`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#quote_display_name)

***

### quote\_symbol?

> `optional` **quote\_symbol**: `string`

Defined in: main.ts:94764

identifier of the quote asset in a pair
example: USD

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`quote_symbol`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#quote_symbol)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22437

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#rank_absolute)

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

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`rank_group`](BaseGoogleFinanceTickerSearchSerpElementItem.md#rank_group)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:22457

date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`timestamp`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#timestamp)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`timestamp`](BaseGoogleFinanceTickerSearchSerpElementItem.md#timestamp)

***

### trend?

> `optional` **trend**: `string`

Defined in: main.ts:22452

growth trend of the market index
possible values: up, down, stable

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`trend`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#trend)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`trend`](BaseGoogleFinanceTickerSearchSerpElementItem.md#trend)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22430

type of element

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`type`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`type`](BaseGoogleFinanceTickerSearchSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22446

URL to the page of the market index on Google Finance

#### Implementation of

[`IGoogleFinanceAssetPairSerpElementItem`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md).[`url`](../interfaces/IGoogleFinanceAssetPairSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`url`](BaseGoogleFinanceTickerSearchSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:94784

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

Defined in: main.ts:94807

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`toJSON`](BaseGoogleFinanceTickerSearchSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleFinanceAssetPairSerpElementItem`

Defined in: main.ts:94800

#### Parameters

##### data

`any`

#### Returns

`GoogleFinanceAssetPairSerpElementItem`

#### Overrides

[`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md).[`fromJS`](BaseGoogleFinanceTickerSearchSerpElementItem.md#fromjs)
