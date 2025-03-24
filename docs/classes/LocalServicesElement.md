[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalServicesElement

# Class: LocalServicesElement

Defined in: main.ts:38477

## Implements

- [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalServicesElement**(`data`?): `LocalServicesElement`

Defined in: main.ts:38496

#### Parameters

##### data?

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

#### Returns

`LocalServicesElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:38487

description

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`description`](../interfaces/ILocalServicesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38485

website domain

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`domain`](../interfaces/ILocalServicesElement.md#domain)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:38492

URL of the image featured in the element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`profile_image_url`](../interfaces/ILocalServicesElement.md#profile_image_url)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:38490

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`rating`](../interfaces/ILocalServicesElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38481

title of a given link element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`title`](../interfaces/ILocalServicesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38479

type of element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`type`](../interfaces/ILocalServicesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38483

URL

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`url`](../interfaces/ILocalServicesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38505

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38528

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `LocalServicesElement`

Defined in: main.ts:38521

#### Parameters

##### data

`any`

#### Returns

`LocalServicesElement`
