[**Documentation**](../README.md)

***

[Documentation](../README.md) / VisualStoriesSerpElementItem

# Class: VisualStoriesSerpElementItem

Defined in: main.ts:38225

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new VisualStoriesSerpElementItem**(`data?`): `VisualStoriesSerpElementItem`

Defined in: main.ts:38241

#### Parameters

##### data?

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md)

#### Returns

`VisualStoriesSerpElementItem`

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

> `optional` **items**: [`LicensesElement`](LicensesElement.md)[]

Defined in: main.ts:38233

contains arrays of specific images

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`items`](../interfaces/IVisualStoriesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:38229

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`position`](../interfaces/IVisualStoriesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/IVisualStoriesSerpElementItem.md#rank_absolute)

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

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rank_group`](../interfaces/IVisualStoriesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:38237

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rectangle`](../interfaces/IVisualStoriesSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`type`](../interfaces/IVisualStoriesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:38231

the XPath of the element

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`xpath`](../interfaces/IVisualStoriesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38246

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

Defined in: main.ts:38271

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `VisualStoriesSerpElementItem`

Defined in: main.ts:38264

#### Parameters

##### data

`any`

#### Returns

`VisualStoriesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
