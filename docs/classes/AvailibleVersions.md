[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailibleVersions

# Class: AvailibleVersions

Defined in: main.ts:187294

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AvailibleVersions**(`data?`): `AvailibleVersions`

Defined in: main.ts:187303

#### Parameters

##### data?

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

#### Returns

`AvailibleVersions`

## Properties

### default?

> `optional` **default**: `boolean`

Defined in: main.ts:187299

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`default`](../interfaces/IAvailibleVersions.md#default)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:187296

lighthouse version

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`version`](../interfaces/IAvailibleVersions.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:187312

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:187330

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AvailibleVersions`

Defined in: main.ts:187323

#### Parameters

##### data

`any`

#### Returns

`AvailibleVersions`
