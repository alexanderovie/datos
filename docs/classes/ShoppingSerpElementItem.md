[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShoppingSerpElementItem

# Class: ShoppingSerpElementItem

Defined in: main.ts:35757

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ShoppingSerpElementItem**(`data?`): `ShoppingSerpElementItem`

Defined in: main.ts:35775

#### Parameters

##### data?

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

#### Returns

`ShoppingSerpElementItem`

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

> `optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

Defined in: main.ts:35767

contains arrays of specific images

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`items`](../interfaces/IShoppingSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35761

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`position`](../interfaces/IShoppingSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

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

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35771

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rectangle`](../interfaces/IShoppingSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35765

title of the row

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`title`](../interfaces/IShoppingSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`type`](../interfaces/IShoppingSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35763

the XPath of the element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`xpath`](../interfaces/IShoppingSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:35780

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

Defined in: main.ts:35806

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ShoppingSerpElementItem`

Defined in: main.ts:35799

#### Parameters

##### data

`any`

#### Returns

`ShoppingSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
