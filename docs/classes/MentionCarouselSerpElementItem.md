[**Documentation**](../README.md)

***

[Documentation](../README.md) / MentionCarouselSerpElementItem

# Class: MentionCarouselSerpElementItem

Defined in: main.ts:35650

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselSerpElementItem()

> **new MentionCarouselSerpElementItem**(`data`?): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

Defined in: main.ts:35668

#### Parameters

##### data?

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

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

> `optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

Defined in: main.ts:35660

contains arrays of specific images

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`items`](../interfaces/IMentionCarouselSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35654

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`position`](../interfaces/IMentionCarouselSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselSerpElementItem.md#rank_absolute)

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

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35664

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rectangle`](../interfaces/IMentionCarouselSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35658

title of the row

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`title`](../interfaces/IMentionCarouselSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`type`](../interfaces/IMentionCarouselSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35656

the XPath of the element

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35673

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

Defined in: main.ts:35699

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

Defined in: main.ts:35692

#### Parameters

##### data

`any`

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
