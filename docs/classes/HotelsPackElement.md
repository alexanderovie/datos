[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackElement

# Class: HotelsPackElement

Defined in: main.ts:38001

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HotelsPackElement**(`data`?): `HotelsPackElement`

Defined in: main.ts:38026

#### Parameters

##### data?

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

#### Returns

`HotelsPackElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:38009

description

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`description`](../interfaces/IHotelsPackElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38015

website domain

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`domain`](../interfaces/IHotelsPackElement.md#domain)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:38013

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`hotel_identifier`](../interfaces/IHotelsPackElement.md#hotel_identifier)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:38019

indicates whether the element is an ad

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`is_paid`](../interfaces/IHotelsPackElement.md#is_paid)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:38005

price indicated in the element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`price`](../interfaces/IHotelsPackElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:38022

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`rating`](../interfaces/IHotelsPackElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38007

title of a given link element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`title`](../interfaces/IHotelsPackElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38003

type of element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`type`](../interfaces/IHotelsPackElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38017

URL

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`url`](../interfaces/IHotelsPackElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38035

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38060

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HotelsPackElement`

Defined in: main.ts:38053

#### Parameters

##### data

`any`

#### Returns

`HotelsPackElement`
