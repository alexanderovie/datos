[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseLocalBusinessLink

# Class: BaseLocalBusinessLink

Defined in: main.ts:26068

## Extended by

- [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)
- [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)
- [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

## Implements

- [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

## Constructors

### Constructor

> **new BaseLocalBusinessLink**(`data?`): `BaseLocalBusinessLink`

Defined in: main.ts:26074

#### Parameters

##### data?

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

`BaseLocalBusinessLink`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:26072

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:26070

type of element

#### Implementation of

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md).[`type`](../interfaces/IBaseLocalBusinessLink.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:26084

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:26112

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseLocalBusinessLink`

Defined in: main.ts:26090

#### Parameters

##### data

`any`

#### Returns

`BaseLocalBusinessLink`
