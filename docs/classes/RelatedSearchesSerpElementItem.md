[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesSerpElementItem

# Class: RelatedSearchesSerpElementItem

Defined in: main.ts:36335

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RelatedSearchesSerpElementItem**(`data?`): `RelatedSearchesSerpElementItem`

Defined in: main.ts:36351

#### Parameters

##### data?

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

#### Returns

`RelatedSearchesSerpElementItem`

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

> `optional` **items**: `string`[]

Defined in: main.ts:36343

contains arrays of specific images

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:36339

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_absolute)

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

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36347

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IRelatedSearchesSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:36341

the XPath of the element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:36356

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

Defined in: main.ts:36381

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RelatedSearchesSerpElementItem`

Defined in: main.ts:36374

#### Parameters

##### data

`any`

#### Returns

`RelatedSearchesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
