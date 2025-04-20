[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessOrderLink

# Class: LocalBusinessOrderLink

Defined in: main.ts:26181

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalBusinessOrderLink**(`data?`): `LocalBusinessOrderLink`

Defined in: main.ts:26187

#### Parameters

##### data?

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

#### Returns

`LocalBusinessOrderLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:26072

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### delivery\_services?

> `optional` **delivery\_services**: [`LocalBusinessDeliveryServiceInfo`](LocalBusinessDeliveryServiceInfo.md)[]

Defined in: main.ts:26183

lists available delivery services

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`delivery_services`](../interfaces/ILocalBusinessOrderLink.md#delivery_services)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:26070

type of element

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`type`](../interfaces/ILocalBusinessOrderLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:26192

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:26214

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `LocalBusinessOrderLink`

Defined in: main.ts:26207

#### Parameters

##### data

`any`

#### Returns

`LocalBusinessOrderLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
