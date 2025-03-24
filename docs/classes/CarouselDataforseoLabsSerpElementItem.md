[**Documentation**](../README.md)

***

[Documentation](../README.md) / CarouselDataforseoLabsSerpElementItem

# Class: CarouselDataforseoLabsSerpElementItem

Defined in: main.ts:117415

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CarouselDataforseoLabsSerpElementItem**(`data`?): `CarouselDataforseoLabsSerpElementItem`

Defined in: main.ts:117424

#### Parameters

##### data?

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

#### Returns

`CarouselDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22569

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

Defined in: main.ts:117420

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117417

title of the result in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117429

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:117452

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `CarouselDataforseoLabsSerpElementItem`

Defined in: main.ts:117445

#### Parameters

##### data

`any`

#### Returns

`CarouselDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
