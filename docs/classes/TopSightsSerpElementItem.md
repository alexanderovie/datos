[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopSightsSerpElementItem

# Class: TopSightsSerpElementItem

Defined in: main.ts:36815

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopSightsSerpElementItem**(`data`?): `TopSightsSerpElementItem`

Defined in: main.ts:36833

#### Parameters

##### data?

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

#### Returns

`TopSightsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

Defined in: main.ts:36825

contains arrays of specific images

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`items`](../interfaces/ITopSightsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:36819

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`position`](../interfaces/ITopSightsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21984

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36829

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rectangle`](../interfaces/ITopSightsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36823

title of the row

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`title`](../interfaces/ITopSightsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`type`](../interfaces/ITopSightsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:36821

the XPath of the element

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36838

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

Defined in: main.ts:36864

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `TopSightsSerpElementItem`

Defined in: main.ts:36857

#### Parameters

##### data

`any`

#### Returns

`TopSightsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
