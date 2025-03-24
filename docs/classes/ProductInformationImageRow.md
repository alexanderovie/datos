[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationImageRow

# Class: ProductInformationImageRow

Defined in: main.ts:206006

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationImageRow**(`data`?): `ProductInformationImageRow`

Defined in: main.ts:206014

#### Parameters

##### data?

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

#### Returns

`ProductInformationImageRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25464

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

***

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:206008

alternative text of the related product image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`alt`](../interfaces/IProductInformationImageRow.md#alt)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25460

type of element

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`type`](../interfaces/IProductInformationImageRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206010

URL of the image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`url`](../interfaces/IProductInformationImageRow.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:206019

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

Defined in: main.ts:206038

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationImageRow`

Defined in: main.ts:206031

#### Parameters

##### data

`any`

#### Returns

`ProductInformationImageRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)
