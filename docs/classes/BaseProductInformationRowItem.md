[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

Defined in: main.ts:25466

## Extended by

- [`ProductInformationImageRow`](ProductInformationImageRow.md)
- [`ProductInformationTextRow`](ProductInformationTextRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BaseProductInformationRowItem**(`data?`): `BaseProductInformationRowItem`

Defined in: main.ts:25474

#### Parameters

##### data?

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

`BaseProductInformationRowItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25472

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25468

type of element

#### Implementation of

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md).[`type`](../interfaces/IBaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:25484

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:25511

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseProductInformationRowItem`

Defined in: main.ts:25494

#### Parameters

##### data

`any`

#### Returns

`BaseProductInformationRowItem`
