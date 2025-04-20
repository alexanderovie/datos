[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

Defined in: main.ts:206590

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationTextRow**(`data?`): `ProductInformationTextRow`

Defined in: main.ts:206596

#### Parameters

##### data?

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

#### Returns

`ProductInformationTextRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25472

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:206592

text of the voucher

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`text`](../interfaces/IProductInformationTextRow.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25468

type of element

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`type`](../interfaces/IProductInformationTextRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206601

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:206619

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationTextRow`

Defined in: main.ts:206612

#### Parameters

##### data

`any`

#### Returns

`ProductInformationTextRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)
