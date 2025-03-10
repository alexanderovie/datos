[**Documentation**](../README.md)

***

[Documentation](../README.md) / Source

# Class: Source

Defined in: main.ts:232575

## Implements

- [`ISource`](../interfaces/ISource.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Source()

> **new Source**(`data`?): [`Source`](Source.md)

Defined in: main.ts:232585

#### Parameters

##### data?

[`ISource`](../interfaces/ISource.md)

#### Returns

[`Source`](Source.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:232581

domain of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`domain`](../interfaces/ISource.md#domain)

***

### image?

> `optional` **image**: `string`

Defined in: main.ts:232579

featured image of the source

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`image`](../interfaces/ISource.md#image)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:232577

name of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`title`](../interfaces/ISource.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:232594

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:232613

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Source`](Source.md)

Defined in: main.ts:232606

#### Parameters

##### data

`any`

#### Returns

[`Source`](Source.md)
