[**Documentation**](../README.md)

***

[Documentation](../README.md) / MapDataforseoLabsSerpElementItem

# Class: MapDataforseoLabsSerpElementItem

Defined in: main.ts:117761

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MapDataforseoLabsSerpElementItem**(`data`?): `MapDataforseoLabsSerpElementItem`

Defined in: main.ts:117769

#### Parameters

##### data?

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md)

#### Returns

`MapDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22569

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMapDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117763

title of the result in SERP

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMapDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IMapDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:117765

relevant URL

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IMapDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMapDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117774

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

Defined in: main.ts:117793

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `MapDataforseoLabsSerpElementItem`

Defined in: main.ts:117786

#### Parameters

##### data

`any`

#### Returns

`MapDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
