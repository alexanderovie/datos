[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppElement

# Class: AppElement

Defined in: main.ts:34945

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppElement**(`data`?): `AppElement`

Defined in: main.ts:34959

#### Parameters

##### data?

[`IAppElement`](../interfaces/IAppElement.md)

#### Returns

`AppElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:34951

description

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`description`](../interfaces/IAppElement.md#description)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:34955

price indicated in the element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`price`](../interfaces/IAppElement.md#price)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34949

title of a given link element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`title`](../interfaces/IAppElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34947

type of element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`type`](../interfaces/IAppElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34953

URL

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`url`](../interfaces/IAppElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34968

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34989

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppElement`

Defined in: main.ts:34982

#### Parameters

##### data

`any`

#### Returns

`AppElement`
