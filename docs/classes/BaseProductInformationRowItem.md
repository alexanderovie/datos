[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

Defined in: main.ts:25119

## Extended by

- [`ProductInformationImageRow`](ProductInformationImageRow.md)
- [`ProductInformationTextRow`](ProductInformationTextRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BaseProductInformationRowItem()

> **new BaseProductInformationRowItem**(`data`?): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

Defined in: main.ts:25127

#### Parameters

##### data?

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25125

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25121

type of element

#### Implementation of

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md).[`type`](../interfaces/IBaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25137

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25164

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

Defined in: main.ts:25147

#### Parameters

##### data

`any`

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)
