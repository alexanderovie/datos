[**Documentation**](../README.md)

***

[Documentation](../README.md) / FormatsElement

# Class: FormatsElement

Defined in: main.ts:60608

## Implements

- [`IFormatsElement`](../interfaces/IFormatsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new FormatsElement**(`data?`): `FormatsElement`

Defined in: main.ts:60619

#### Parameters

##### data?

[`IFormatsElement`](../interfaces/IFormatsElement.md)

#### Returns

`FormatsElement`

## Properties

### format?

> `optional` **format**: `string`

Defined in: main.ts:60613

type of file format of the dataset
for example: zip, html, csv

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`format`](../interfaces/IFormatsElement.md#format)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:60615

file size in bytes

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`size`](../interfaces/IFormatsElement.md#size)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:60610

type of element

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`type`](../interfaces/IFormatsElement.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:60628

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:60647

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `FormatsElement`

Defined in: main.ts:60640

#### Parameters

##### data

`any`

#### Returns

`FormatsElement`
