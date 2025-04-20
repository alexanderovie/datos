[**Documentation**](../README.md)

***

[Documentation](../README.md) / VideoDataforseoLabsSerpElementItem

# Class: VideoDataforseoLabsSerpElementItem

Defined in: main.ts:116930

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new VideoDataforseoLabsSerpElementItem**(`data?`): `VideoDataforseoLabsSerpElementItem`

Defined in: main.ts:116939

#### Parameters

##### data?

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

#### Returns

`VideoDataforseoLabsSerpElementItem`

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

> `optional` **items**: [`VideoElement`](VideoElement.md)[]

Defined in: main.ts:116935

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22573

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22569

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22566

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116932

search engine type

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#se_type)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22563

type of element

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22575

the XPath of the element

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:116944

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

Defined in: main.ts:116967

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `VideoDataforseoLabsSerpElementItem`

Defined in: main.ts:116960

#### Parameters

##### data

`any`

#### Returns

`VideoDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
