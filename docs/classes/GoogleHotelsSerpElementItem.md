[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleHotelsSerpElementItem

# Class: GoogleHotelsSerpElementItem

Defined in: main.ts:38673

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleHotelsSerpElementItem**(`data?`): `GoogleHotelsSerpElementItem`

Defined in: main.ts:38695

#### Parameters

##### data?

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

#### Returns

`GoogleHotelsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:38687

google-defined client id

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`cid`](../interfaces/IGoogleHotelsSerpElementItem.md#cid)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:38683

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsSerpElementItem.md#hotel_identifier)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:38677

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_absolute)

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

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:38691

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleHotelsSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`type`](../interfaces/IGoogleHotelsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38685

source URL

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:38679

the XPath of the element

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38700

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

Defined in: main.ts:38723

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleHotelsSerpElementItem`

Defined in: main.ts:38716

#### Parameters

##### data

`any`

#### Returns

`GoogleHotelsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
