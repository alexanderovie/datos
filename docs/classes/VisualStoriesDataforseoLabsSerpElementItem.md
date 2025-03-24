[**Documentation**](../README.md)

***

[Documentation](../README.md) / VisualStoriesDataforseoLabsSerpElementItem

# Class: VisualStoriesDataforseoLabsSerpElementItem

Defined in: main.ts:119855

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new VisualStoriesDataforseoLabsSerpElementItem**(`data`?): `VisualStoriesDataforseoLabsSerpElementItem`

Defined in: main.ts:119862

#### Parameters

##### data?

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

#### Returns

`VisualStoriesDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`LicensesElement`](LicensesElement.md)[]

Defined in: main.ts:119858

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119867

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

Defined in: main.ts:119889

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `VisualStoriesDataforseoLabsSerpElementItem`

Defined in: main.ts:119882

#### Parameters

##### data

`any`

#### Returns

`VisualStoriesDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
