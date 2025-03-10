[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppElement

# Class: AppElement

Defined in: main.ts:34518

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppElement()

> **new AppElement**(`data`?): [`AppElement`](AppElement.md)

Defined in: main.ts:34532

#### Parameters

##### data?

[`IAppElement`](../interfaces/IAppElement.md)

#### Returns

[`AppElement`](AppElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:34524

description

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`description`](../interfaces/IAppElement.md#description)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:34528

price indicated in the element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`price`](../interfaces/IAppElement.md#price)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34522

title of a given link element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`title`](../interfaces/IAppElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34520

type of element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`type`](../interfaces/IAppElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34526

URL

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`url`](../interfaces/IAppElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34541

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34562

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppElement`](AppElement.md)

Defined in: main.ts:34555

#### Parameters

##### data

`any`

#### Returns

[`AppElement`](AppElement.md)
