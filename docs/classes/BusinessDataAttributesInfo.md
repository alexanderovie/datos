[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

Defined in: main.ts:223120

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataAttributesInfo**(`data?`): `BusinessDataAttributesInfo`

Defined in: main.ts:223130

#### Parameters

##### data?

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

#### Returns

`BusinessDataAttributesInfo`

## Properties

### available\_attributes?

> `optional` **available\_attributes**: `object`

Defined in: main.ts:223123

available attributes
indicates attributes a business entity can offer

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`available_attributes`](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

***

### unavailable\_attributes?

> `optional` **unavailable\_attributes**: `object`

Defined in: main.ts:223126

unavailable attributes
indicates attributes a business entity cannot offer

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`unavailable_attributes`](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:223139

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:223169

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataAttributesInfo`

Defined in: main.ts:223162

#### Parameters

##### data

`any`

#### Returns

`BusinessDataAttributesInfo`
