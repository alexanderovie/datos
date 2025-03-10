[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePostsDataforseoLabsSerpElementItem

# Class: GooglePostsDataforseoLabsSerpElementItem

Defined in: main.ts:117552

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GooglePostsDataforseoLabsSerpElementItem()

> **new GooglePostsDataforseoLabsSerpElementItem**(`data`?): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117564

#### Parameters

##### data?

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md)

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22230

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:117560

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#cid)

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:117556

the additional feature of the review

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`feature`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#feature)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### posts\_id?

> `optional` **posts\_id**: `string`

Defined in: main.ts:117554

the identifier of the google_posts feature

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`posts_id`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#posts_id)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`IGooglePostsDataforseoLabsSerpElementItem`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGooglePostsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117569

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

Defined in: main.ts:117589

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117582

#### Parameters

##### data

`any`

#### Returns

[`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
