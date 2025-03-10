[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

Defined in: main.ts:203549

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInformationTextItem()

> **new ProductInformationTextItem**(`data`?): [`ProductInformationTextItem`](ProductInformationTextItem.md)

Defined in: main.ts:203555

#### Parameters

##### data?

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25062

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25060

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`section_name`](../interfaces/IProductInformationTextItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:203551

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`text`](../interfaces/IProductInformationTextItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25058

type of element

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`type`](../interfaces/IProductInformationTextItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203560

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

Defined in: main.ts:203578

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationTextItem`](ProductInformationTextItem.md)

Defined in: main.ts:203571

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
