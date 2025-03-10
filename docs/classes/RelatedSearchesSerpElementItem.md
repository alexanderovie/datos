[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesSerpElementItem

# Class: RelatedSearchesSerpElementItem

Defined in: main.ts:35900

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesSerpElementItem()

> **new RelatedSearchesSerpElementItem**(`data`?): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

Defined in: main.ts:35916

#### Parameters

##### data?

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21783

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:35908

contains arrays of specific images

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35904

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21778

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35912

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IRelatedSearchesSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35906

the XPath of the element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35921

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35946

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

Defined in: main.ts:35939

#### Parameters

##### data

`any`

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
