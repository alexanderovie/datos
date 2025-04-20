[**Documentation**](../README.md)

***

[Documentation](../README.md) / RefineProductsSerpElementItem

# Class: RefineProductsSerpElementItem

Defined in: main.ts:39845

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RefineProductsSerpElementItem**(`data?`): `RefineProductsSerpElementItem`

Defined in: main.ts:39863

#### Parameters

##### data?

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

#### Returns

`RefineProductsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`RefineProductsElement`](RefineProductsElement.md)[]

Defined in: main.ts:39855

contains arrays of specific images

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`items`](../interfaces/IRefineProductsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:39849

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`position`](../interfaces/IRefineProductsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IRefineProductsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_group`](../interfaces/IRefineProductsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:39859

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rectangle`](../interfaces/IRefineProductsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:39853

title of the row

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`title`](../interfaces/IRefineProductsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`type`](../interfaces/IRefineProductsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:39851

the XPath of the element

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`xpath`](../interfaces/IRefineProductsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:39868

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:39894

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RefineProductsSerpElementItem`

Defined in: main.ts:39887

#### Parameters

##### data

`any`

#### Returns

`RefineProductsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
