[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopSightsElement

# Class: TopSightsElement

Defined in: main.ts:36747

## Implements

- [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopSightsElement**(`data?`): `TopSightsElement`

Defined in: main.ts:36762

#### Parameters

##### data?

[`ITopSightsElement`](../interfaces/ITopSightsElement.md)

#### Returns

`TopSightsElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:36755

description

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`description`](../interfaces/ITopSightsElement.md#description)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:36758

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`rating`](../interfaces/ITopSightsElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36751

title of a given link element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`title`](../interfaces/ITopSightsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36749

type of element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`type`](../interfaces/ITopSightsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36753

URL

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`url`](../interfaces/ITopSightsElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:36771

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:36792

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TopSightsElement`

Defined in: main.ts:36785

#### Parameters

##### data

`any`

#### Returns

`TopSightsElement`
