[**Documentation**](../README.md)

***

[Documentation](../README.md) / FindResultsOnDataforseoLabsSerpElementItem

# Class: FindResultsOnDataforseoLabsSerpElementItem

Defined in: main.ts:119703

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new FindResultsOnDataforseoLabsSerpElementItem**(`data`?): `FindResultsOnDataforseoLabsSerpElementItem`

Defined in: main.ts:119710

#### Parameters

##### data?

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

#### Returns

`FindResultsOnDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

Defined in: main.ts:119706

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119715

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

Defined in: main.ts:119737

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `FindResultsOnDataforseoLabsSerpElementItem`

Defined in: main.ts:119730

#### Parameters

##### data

`any`

#### Returns

`FindResultsOnDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
