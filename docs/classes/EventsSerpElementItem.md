[**Documentation**](../README.md)

***

[Documentation](../README.md) / EventsSerpElementItem

# Class: EventsSerpElementItem

Defined in: main.ts:36233

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new EventsSerpElementItem**(`data`?): `EventsSerpElementItem`

Defined in: main.ts:36253

#### Parameters

##### data?

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

#### Returns

`EventsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`EventsElement`](EventsElement.md)[]

Defined in: main.ts:36245

contains arrays of specific images

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`items`](../interfaces/IEventsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:36237

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`position`](../interfaces/IEventsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_absolute`](../interfaces/IEventsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21984

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_group`](../interfaces/IEventsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36249

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rectangle`](../interfaces/IEventsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36241

title of the row

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`title`](../interfaces/IEventsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`type`](../interfaces/IEventsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36243

source URL

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`url`](../interfaces/IEventsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:36239

the XPath of the element

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`xpath`](../interfaces/IEventsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36258

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

Defined in: main.ts:36285

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `EventsSerpElementItem`

Defined in: main.ts:36278

#### Parameters

##### data

`any`

#### Returns

`EventsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
