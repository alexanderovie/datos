[**Documentation**](../README.md)

***

[Documentation](../README.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

Defined in: main.ts:39138

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FoundOnWebSerpElementItem()

> **new FoundOnWebSerpElementItem**(`data`?): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

Defined in: main.ts:39158

#### Parameters

##### data?

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

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

> `optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

Defined in: main.ts:39150

contains arrays of specific images

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`items`](../interfaces/IFoundOnWebSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:39142

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`position`](../interfaces/IFoundOnWebSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_absolute`](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_group`](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:39154

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rectangle`](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

Defined in: main.ts:39148

search queries related to the elment

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`related_searches`](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:39146

title of the row

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`title`](../interfaces/IFoundOnWebSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`type`](../interfaces/IFoundOnWebSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:39144

the XPath of the element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`xpath`](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39163

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

Defined in: main.ts:39194

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

Defined in: main.ts:39187

#### Parameters

##### data

`any`

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
