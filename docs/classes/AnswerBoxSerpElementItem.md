[**Documentation**](../README.md)

***

[Documentation](../README.md) / AnswerBoxSerpElementItem

# Class: AnswerBoxSerpElementItem

Defined in: main.ts:35549

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AnswerBoxSerpElementItem**(`data?`): `AnswerBoxSerpElementItem`

Defined in: main.ts:35568

#### Parameters

##### data?

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

#### Returns

`AnswerBoxSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:35560

link of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`links`](../interfaces/IAnswerBoxSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35553

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`position`](../interfaces/IAnswerBoxSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxSerpElementItem.md#rank_absolute)

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

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35564

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rectangle`](../interfaces/IAnswerBoxSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`[]

Defined in: main.ts:35558

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`text`](../interfaces/IAnswerBoxSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`type`](../interfaces/IAnswerBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35555

the XPath of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:35573

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

Defined in: main.ts:35603

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AnswerBoxSerpElementItem`

Defined in: main.ts:35596

#### Parameters

##### data

`any`

#### Returns

`AnswerBoxSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
