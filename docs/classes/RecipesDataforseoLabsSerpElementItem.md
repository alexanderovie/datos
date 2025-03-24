[**Documentation**](../README.md)

***

[Documentation](../README.md) / RecipesDataforseoLabsSerpElementItem

# Class: RecipesDataforseoLabsSerpElementItem

Defined in: main.ts:119337

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RecipesDataforseoLabsSerpElementItem**(`data`?): `RecipesDataforseoLabsSerpElementItem`

Defined in: main.ts:119344

#### Parameters

##### data?

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md)

#### Returns

`RecipesDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`RecipesElement`](RecipesElement.md)[]

Defined in: main.ts:119340

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119349

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

Defined in: main.ts:119371

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RecipesDataforseoLabsSerpElementItem`

Defined in: main.ts:119364

#### Parameters

##### data

`any`

#### Returns

`RecipesDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
