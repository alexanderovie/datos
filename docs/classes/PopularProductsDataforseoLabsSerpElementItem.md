[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularProductsDataforseoLabsSerpElementItem

# Class: PopularProductsDataforseoLabsSerpElementItem

Defined in: main.ts:118146

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PopularProductsDataforseoLabsSerpElementItem()

> **new PopularProductsDataforseoLabsSerpElementItem**(`data`?): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:118153

#### Parameters

##### data?

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22230

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

Defined in: main.ts:118149

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118158

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:118180

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:118173

#### Parameters

##### data

`any`

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
