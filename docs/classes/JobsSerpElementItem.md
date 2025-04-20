[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsSerpElementItem

# Class: JobsSerpElementItem

Defined in: main.ts:34779

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new JobsSerpElementItem**(`data?`): `JobsSerpElementItem`

Defined in: main.ts:34799

#### Parameters

##### data?

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md)

#### Returns

`JobsSerpElementItem`

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

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

Defined in: main.ts:34791

contains arrays of specific images

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`items`](../interfaces/IJobsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34783

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`position`](../interfaces/IJobsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsSerpElementItem.md#rank_absolute)

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

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rank_group`](../interfaces/IJobsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34795

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`rectangle`](../interfaces/IJobsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34787

title of the row

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`title`](../interfaces/IJobsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`type`](../interfaces/IJobsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34789

source URL

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`url`](../interfaces/IJobsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:34785

the XPath of the element

#### Implementation of

[`IJobsSerpElementItem`](../interfaces/IJobsSerpElementItem.md).[`xpath`](../interfaces/IJobsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:34804

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

Defined in: main.ts:34831

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `JobsSerpElementItem`

Defined in: main.ts:34824

#### Parameters

##### data

`any`

#### Returns

`JobsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
