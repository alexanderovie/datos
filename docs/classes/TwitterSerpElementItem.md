[**Documentation**](../README.md)

***

[Documentation](../README.md) / TwitterSerpElementItem

# Class: TwitterSerpElementItem

Defined in: main.ts:34481

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TwitterSerpElementItem**(`data?`): `TwitterSerpElementItem`

Defined in: main.ts:34501

#### Parameters

##### data?

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

#### Returns

`TwitterSerpElementItem`

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

> `optional` **items**: [`TwitterElement`](TwitterElement.md)[]

Defined in: main.ts:34493

contains arrays of specific images

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`items`](../interfaces/ITwitterSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34485

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`position`](../interfaces/ITwitterSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterSerpElementItem.md#rank_absolute)

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

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_group`](../interfaces/ITwitterSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34497

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rectangle`](../interfaces/ITwitterSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34489

title of the row

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`title`](../interfaces/ITwitterSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`type`](../interfaces/ITwitterSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34491

source URL

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`url`](../interfaces/ITwitterSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:34487

the XPath of the element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`xpath`](../interfaces/ITwitterSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:34506

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

Defined in: main.ts:34533

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `TwitterSerpElementItem`

Defined in: main.ts:34526

#### Parameters

##### data

`any`

#### Returns

`TwitterSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
