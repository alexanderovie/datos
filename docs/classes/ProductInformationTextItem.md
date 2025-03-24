[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

Defined in: main.ts:205958

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationTextItem**(`data`?): `ProductInformationTextItem`

Defined in: main.ts:205964

#### Parameters

##### data?

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

#### Returns

`ProductInformationTextItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25401

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25399

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`section_name`](../interfaces/IProductInformationTextItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:205960

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`text`](../interfaces/IProductInformationTextItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25397

type of element

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`type`](../interfaces/IProductInformationTextItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205969

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

Defined in: main.ts:205987

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationTextItem`

Defined in: main.ts:205980

#### Parameters

##### data

`any`

#### Returns

`ProductInformationTextItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
