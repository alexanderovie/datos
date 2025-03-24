[**Documentation**](../README.md)

***

[Documentation](../README.md) / Source

# Class: Source

Defined in: main.ts:234984

## Implements

- [`ISource`](../interfaces/ISource.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Source**(`data`?): `Source`

Defined in: main.ts:234994

#### Parameters

##### data?

[`ISource`](../interfaces/ISource.md)

#### Returns

`Source`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:234990

domain of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`domain`](../interfaces/ISource.md#domain)

***

### image?

> `optional` **image**: `string`

Defined in: main.ts:234988

featured image of the source

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`image`](../interfaces/ISource.md#image)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:234986

name of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`title`](../interfaces/ISource.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235003

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235022

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Source`

Defined in: main.ts:235015

#### Parameters

##### data

`any`

#### Returns

`Source`
