[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailibleVersions

# Class: AvailibleVersions

Defined in: main.ts:184475

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AvailibleVersions()

> **new AvailibleVersions**(`data`?): [`AvailibleVersions`](AvailibleVersions.md)

Defined in: main.ts:184484

#### Parameters

##### data?

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

## Properties

### default?

> `optional` **default**: `boolean`

Defined in: main.ts:184480

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`default`](../interfaces/IAvailibleVersions.md#default)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:184477

lighthouse version

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`version`](../interfaces/IAvailibleVersions.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184493

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184511

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailibleVersions`](AvailibleVersions.md)

Defined in: main.ts:184504

#### Parameters

##### data

`any`

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)
