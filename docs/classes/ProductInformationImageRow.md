[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationImageRow

# Class: ProductInformationImageRow

Defined in: main.ts:206536

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationImageRow**(`data?`): `ProductInformationImageRow`

Defined in: main.ts:206544

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

Defined in: main.ts:25472

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

***

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:206538

alternative text of the related product image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`alt`](../interfaces/IProductInformationImageRow.md#alt)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25468

type of element

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`type`](../interfaces/IProductInformationImageRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206540

URL of the image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`url`](../interfaces/IProductInformationImageRow.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206549

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

Defined in: main.ts:206568

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

Defined in: main.ts:206561

#### Parameters

##### data

`any`

#### Returns

`ProductInformationImageRow`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)
