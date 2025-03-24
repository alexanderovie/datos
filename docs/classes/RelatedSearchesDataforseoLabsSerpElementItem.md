[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesDataforseoLabsSerpElementItem

# Class: RelatedSearchesDataforseoLabsSerpElementItem

Defined in: main.ts:116872

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RelatedSearchesDataforseoLabsSerpElementItem**(`data`?): `RelatedSearchesDataforseoLabsSerpElementItem`

Defined in: main.ts:116881

#### Parameters

##### data?

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

#### Returns

`RelatedSearchesDataforseoLabsSerpElementItem`

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

> `optional` **items**: `string`[]

Defined in: main.ts:116877

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116874

search engine type

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116886

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

Defined in: main.ts:116909

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RelatedSearchesDataforseoLabsSerpElementItem`

Defined in: main.ts:116902

#### Parameters

##### data

`any`

#### Returns

`RelatedSearchesDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
