[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

Defined in: main.ts:206060

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationTextRow**(`data`?): `ProductInformationTextRow`

Defined in: main.ts:206066

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

Defined in: main.ts:25464

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:206062

text of the voucher

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`text`](../interfaces/IProductInformationTextRow.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25460

type of element

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`type`](../interfaces/IProductInformationTextRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:206071

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:206089

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

Defined in: main.ts:206082

#### Parameters

##### data

`any`

#### Returns

`ProductInformationTextRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)
