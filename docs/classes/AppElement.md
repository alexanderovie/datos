[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppElement

# Class: AppElement

Defined in: main.ts:34953

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppElement**(`data?`): `AppElement`

Defined in: main.ts:34967

#### Parameters

##### data?

[`IAppElement`](../interfaces/IAppElement.md)

#### Returns

`AppElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:34959

description

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`description`](../interfaces/IAppElement.md#description)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:34963

price indicated in the element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`price`](../interfaces/IAppElement.md#price)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34957

title of a given link element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`title`](../interfaces/IAppElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34955

type of element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`type`](../interfaces/IAppElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34961

URL

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`url`](../interfaces/IAppElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:34976

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:34997

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppElement`

Defined in: main.ts:34990

#### Parameters

##### data

`any`

#### Returns

`AppElement`
