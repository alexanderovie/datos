[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShoppingSerpElementItem

# Class: ShoppingSerpElementItem

Defined in: main.ts:35322

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ShoppingSerpElementItem()

> **new ShoppingSerpElementItem**(`data`?): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

Defined in: main.ts:35340

#### Parameters

##### data?

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

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

> `optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

Defined in: main.ts:35332

contains arrays of specific images

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`items`](../interfaces/IShoppingSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35326

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`position`](../interfaces/IShoppingSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

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

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35336

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rectangle`](../interfaces/IShoppingSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35330

title of the row

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`title`](../interfaces/IShoppingSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`type`](../interfaces/IShoppingSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35328

the XPath of the element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`xpath`](../interfaces/IShoppingSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35345

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

Defined in: main.ts:35371

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

Defined in: main.ts:35364

#### Parameters

##### data

`any`

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
