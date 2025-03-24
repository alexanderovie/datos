[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessMenuLink

# Class: LocalBusinessMenuLink

Defined in: main.ts:26293

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalBusinessMenuLink**(`data`?): `LocalBusinessMenuLink`

Defined in: main.ts:26302

#### Parameters

##### data?

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

#### Returns

`LocalBusinessMenuLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:26064

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:26296

title of the element
domain of the online menu system

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`title`](../interfaces/ILocalBusinessMenuLink.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:26062

type of element

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`type`](../interfaces/ILocalBusinessMenuLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26298

URL to view the menu

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`url`](../interfaces/ILocalBusinessMenuLink.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26307

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26326

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `LocalBusinessMenuLink`

Defined in: main.ts:26319

#### Parameters

##### data

`any`

#### Returns

`LocalBusinessMenuLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
