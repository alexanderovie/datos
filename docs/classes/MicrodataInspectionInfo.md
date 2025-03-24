[**Documentation**](../README.md)

***

[Documentation](../README.md) / MicrodataInspectionInfo

# Class: MicrodataInspectionInfo

Defined in: main.ts:183724

## Implements

- [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MicrodataInspectionInfo**(`data`?): `MicrodataInspectionInfo`

Defined in: main.ts:183734

#### Parameters

##### data?

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

#### Returns

`MicrodataInspectionInfo`

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

Defined in: main.ts:183730

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`fields`](../interfaces/IMicrodataInspectionInfo.md#fields)

***

### types?

> `optional` **types**: `string`[]

Defined in: main.ts:183727

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`types`](../interfaces/IMicrodataInspectionInfo.md#types)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183743

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183769

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MicrodataInspectionInfo`

Defined in: main.ts:183762

#### Parameters

##### data

`any`

#### Returns

`MicrodataInspectionInfo`
