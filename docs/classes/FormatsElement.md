[**Documentation**](../README.md)

***

[Documentation](../README.md) / FormatsElement

# Class: FormatsElement

Defined in: main.ts:60067

## Implements

- [`IFormatsElement`](../interfaces/IFormatsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FormatsElement()

> **new FormatsElement**(`data`?): [`FormatsElement`](FormatsElement.md)

Defined in: main.ts:60078

#### Parameters

##### data?

[`IFormatsElement`](../interfaces/IFormatsElement.md)

#### Returns

[`FormatsElement`](FormatsElement.md)

## Properties

### format?

> `optional` **format**: `string`

Defined in: main.ts:60072

type of file format of the dataset
for example: zip, html, csv

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`format`](../interfaces/IFormatsElement.md#format)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:60074

file size in bytes

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`size`](../interfaces/IFormatsElement.md#size)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:60069

type of element

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`type`](../interfaces/IFormatsElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60087

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60106

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`FormatsElement`](FormatsElement.md)

Defined in: main.ts:60099

#### Parameters

##### data

`any`

#### Returns

[`FormatsElement`](FormatsElement.md)
