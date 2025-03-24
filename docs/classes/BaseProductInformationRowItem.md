[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

Defined in: main.ts:25458

## Extended by

- [`ProductInformationImageRow`](ProductInformationImageRow.md)
- [`ProductInformationTextRow`](ProductInformationTextRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BaseProductInformationRowItem**(`data`?): `BaseProductInformationRowItem`

Defined in: main.ts:25466

#### Parameters

##### data?

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

`BaseProductInformationRowItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25464

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25460

type of element

#### Implementation of

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md).[`type`](../interfaces/IBaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25476

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25503

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseProductInformationRowItem`

Defined in: main.ts:25486

#### Parameters

##### data

`any`

#### Returns

`BaseProductInformationRowItem`
