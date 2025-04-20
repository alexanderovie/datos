[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearchDataforseoLabsSerpElementItem

# Class: PeopleAlsoSearchDataforseoLabsSerpElementItem

Defined in: main.ts:117312

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoSearchDataforseoLabsSerpElementItem**(`data?`): `PeopleAlsoSearchDataforseoLabsSerpElementItem`

Defined in: main.ts:117323

#### Parameters

##### data?

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Returns

`PeopleAlsoSearchDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22577

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:117319

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22573

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22569

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22566

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117314

search engine type

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#se_type)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117316

title of the result in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22563

type of element

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22575

the XPath of the element

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:117328

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:117352

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoSearchDataforseoLabsSerpElementItem`

Defined in: main.ts:117345

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoSearchDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
