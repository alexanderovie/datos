[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

Defined in: main.ts:206488

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationTextItem**(`data?`): `ProductInformationTextItem`

Defined in: main.ts:206494

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

Defined in: main.ts:25409

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25407

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`section_name`](../interfaces/IProductInformationTextItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:206490

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`text`](../interfaces/IProductInformationTextItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25405

type of element

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`type`](../interfaces/IProductInformationTextItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206499

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

Defined in: main.ts:206517

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

Defined in: main.ts:206510

#### Parameters

##### data

`any`

#### Returns

`ProductInformationTextItem`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
