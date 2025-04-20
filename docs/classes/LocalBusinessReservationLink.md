[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessReservationLink

# Class: LocalBusinessReservationLink

Defined in: main.ts:26125

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalBusinessReservationLink**(`data?`): `LocalBusinessReservationLink`

Defined in: main.ts:26134

#### Parameters

##### data?

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

#### Returns

`LocalBusinessReservationLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:26072

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:26128

title of the element
domain of the reservation software

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`title`](../interfaces/ILocalBusinessReservationLink.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:26070

type of element

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`type`](../interfaces/ILocalBusinessReservationLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:26130

URL to make a reservation

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`url`](../interfaces/ILocalBusinessReservationLink.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:26139

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

Defined in: main.ts:26158

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `LocalBusinessReservationLink`

Defined in: main.ts:26151

#### Parameters

##### data

`any`

#### Returns

`LocalBusinessReservationLink`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
