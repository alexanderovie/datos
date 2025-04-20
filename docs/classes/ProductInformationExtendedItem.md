[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationExtendedItem

# Class: ProductInformationExtendedItem

Defined in: main.ts:206708

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationExtendedItem**(`data?`): `ProductInformationExtendedItem`

Defined in: main.ts:206714

#### Parameters

##### data?

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

#### Returns

`ProductInformationExtendedItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25409

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### contents?

> `optional` **contents**: [`ProductInformationRows`](ProductInformationRows.md)[]

Defined in: main.ts:206710

contains information specified about the product within the section_name

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`contents`](../interfaces/IProductInformationExtendedItem.md#contents)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25407

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`section_name`](../interfaces/IProductInformationExtendedItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25405

type of element

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`type`](../interfaces/IProductInformationExtendedItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206719

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`init`](BaseProductInformationItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:206741

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationExtendedItem`

Defined in: main.ts:206734

#### Parameters

##### data

`any`

#### Returns

`ProductInformationExtendedItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
