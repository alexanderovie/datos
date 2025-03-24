[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleImageCarouselSerpElementItem

# Class: GoogleImageCarouselSerpElementItem

Defined in: main.ts:53656

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleImageCarouselSerpElementItem**(`data`?): `GoogleImageCarouselSerpElementItem`

Defined in: main.ts:53672

#### Parameters

##### data?

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md)

#### Returns

`GoogleImageCarouselSerpElementItem`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:53588

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

Defined in: main.ts:53664

items of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`items`](../interfaces/IGoogleImageCarouselSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:53660

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`position`](../interfaces/IGoogleImageCarouselSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:53584

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:53581

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:53668

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rectangle`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:53662

title of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`title`](../interfaces/IGoogleImageCarouselSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53577

type of element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`type`](../interfaces/IGoogleImageCarouselSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:53586

the XPath of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageCarouselSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53677

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53702

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleImageCarouselSerpElementItem`

Defined in: main.ts:53695

#### Parameters

##### data

`any`

#### Returns

`GoogleImageCarouselSerpElementItem`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)
