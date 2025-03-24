[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopSightsDataforseoLabsSerpElementItem

# Class: TopSightsDataforseoLabsSerpElementItem

Defined in: main.ts:119395

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopSightsDataforseoLabsSerpElementItem**(`data`?): `TopSightsDataforseoLabsSerpElementItem`

Defined in: main.ts:119404

#### Parameters

##### data?

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

#### Returns

`TopSightsDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

Defined in: main.ts:119400

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:119397

title of the result in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119409

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

Defined in: main.ts:119432

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `TopSightsDataforseoLabsSerpElementItem`

Defined in: main.ts:119425

#### Parameters

##### data

`any`

#### Returns

`TopSightsDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
