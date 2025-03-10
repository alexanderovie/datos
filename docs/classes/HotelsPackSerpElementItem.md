[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackSerpElementItem

# Class: HotelsPackSerpElementItem

Defined in: main.ts:37678

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelsPackSerpElementItem()

> **new HotelsPackSerpElementItem**(`data`?): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

Defined in: main.ts:37706

#### Parameters

##### data?

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21783

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:37691

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_from`](../interfaces/IHotelsPackSerpElementItem.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:37696

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`date_to`](../interfaces/IHotelsPackSerpElementItem.md#date_to)

***

### items?

> `optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

Defined in: main.ts:37698

contains arrays of specific images

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`items`](../interfaces/IHotelsPackSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37682

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`position`](../interfaces/IHotelsPackSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackSerpElementItem.md#rank_absolute)

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

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37702

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`rectangle`](../interfaces/IHotelsPackSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37686

title of the row

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`title`](../interfaces/IHotelsPackSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`type`](../interfaces/IHotelsPackSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:37684

the XPath of the element

#### Implementation of

[`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37711

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

Defined in: main.ts:37739

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

Defined in: main.ts:37732

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
