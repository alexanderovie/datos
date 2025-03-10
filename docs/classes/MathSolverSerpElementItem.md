[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverSerpElementItem

# Class: MathSolverSerpElementItem

Defined in: main.ts:38470

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MathSolverSerpElementItem()

> **new MathSolverSerpElementItem**(`data`?): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

Defined in: main.ts:38493

#### Parameters

##### data?

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

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

> `optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

Defined in: main.ts:38483

contains arrays of specific images

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`items`](../interfaces/IMathSolverSerpElementItem.md#items)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:38485

link of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`links`](../interfaces/IMathSolverSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:38474

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`position`](../interfaces/IMathSolverSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverSerpElementItem.md#rank_absolute)

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

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:38489

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rectangle`](../interfaces/IMathSolverSerpElementItem.md#rectangle)

***

### result?

> `optional` **result**: `string`

Defined in: main.ts:38481

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`result`](../interfaces/IMathSolverSerpElementItem.md#result)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38478

title of the row

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`title`](../interfaces/IMathSolverSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`type`](../interfaces/IMathSolverSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:38476

the XPath of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`xpath`](../interfaces/IMathSolverSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38498

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

Defined in: main.ts:38530

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

Defined in: main.ts:38523

#### Parameters

##### data

`any`

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
