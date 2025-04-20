[**Documentation**](../README.md)

***

[Documentation](../README.md) / CarouselSerpElementItem

# Class: CarouselSerpElementItem

Defined in: main.ts:35297

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CarouselSerpElementItem**(`data?`): `CarouselSerpElementItem`

Defined in: main.ts:35315

#### Parameters

##### data?

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

#### Returns

`CarouselSerpElementItem`

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

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

Defined in: main.ts:35307

contains arrays of specific images

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`items`](../interfaces/ICarouselSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35301

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`position`](../interfaces/ICarouselSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselSerpElementItem.md#rank_absolute)

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

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_group`](../interfaces/ICarouselSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35311

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rectangle`](../interfaces/ICarouselSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35305

title of the row

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`title`](../interfaces/ICarouselSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`type`](../interfaces/ICarouselSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35303

the XPath of the element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`xpath`](../interfaces/ICarouselSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:35320

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

Defined in: main.ts:35346

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `CarouselSerpElementItem`

Defined in: main.ts:35339

#### Parameters

##### data

`any`

#### Returns

`CarouselSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
