[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskDataforseoLabsSerpElementItem

# Class: PeopleAlsoAskDataforseoLabsSerpElementItem

Defined in: main.ts:116744

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoAskDataforseoLabsSerpElementItem**(`data`?): `PeopleAlsoAskDataforseoLabsSerpElementItem`

Defined in: main.ts:116753

#### Parameters

##### data?

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Returns

`PeopleAlsoAskDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

Defined in: main.ts:116749

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116746

search engine type

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116758

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

Defined in: main.ts:116781

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoAskDataforseoLabsSerpElementItem`

Defined in: main.ts:116774

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoAskDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
