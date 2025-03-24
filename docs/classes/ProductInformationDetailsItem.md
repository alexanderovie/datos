[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationDetailsItem

# Class: ProductInformationDetailsItem

Defined in: main.ts:205898

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationDetailsItem**(`data`?): `ProductInformationDetailsItem`

Defined in: main.ts:205904

#### Parameters

##### data?

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

#### Returns

`ProductInformationDetailsItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25401

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### body?

> `optional` **body**: `object`

Defined in: main.ts:205900

contains information specified about the product within the section_name

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`body`](../interfaces/IProductInformationDetailsItem.md#body)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25399

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`section_name`](../interfaces/IProductInformationDetailsItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25397

type of element

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`type`](../interfaces/IProductInformationDetailsItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205909

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`init`](BaseProductInformationItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205933

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationDetailsItem`

Defined in: main.ts:205926

#### Parameters

##### data

`any`

#### Returns

`ProductInformationDetailsItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
