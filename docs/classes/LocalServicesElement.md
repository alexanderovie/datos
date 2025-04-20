[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalServicesElement

# Class: LocalServicesElement

Defined in: main.ts:38485

## Implements

- [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalServicesElement**(`data?`): `LocalServicesElement`

Defined in: main.ts:38504

#### Parameters

##### data?

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

#### Returns

`LocalServicesElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:38495

description

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`description`](../interfaces/ILocalServicesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38493

website domain

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`domain`](../interfaces/ILocalServicesElement.md#domain)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:38500

URL of the image featured in the element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`profile_image_url`](../interfaces/ILocalServicesElement.md#profile_image_url)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:38498

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`rating`](../interfaces/ILocalServicesElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38489

title of a given link element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`title`](../interfaces/ILocalServicesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38487

type of element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`type`](../interfaces/ILocalServicesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38491

URL

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`url`](../interfaces/ILocalServicesElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38513

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:38536

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `LocalServicesElement`

Defined in: main.ts:38529

#### Parameters

##### data

`any`

#### Returns

`LocalServicesElement`
