[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleReviewsDataforseoLabsSerpElementItem

# Class: GoogleReviewsDataforseoLabsSerpElementItem

Defined in: main.ts:118857

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleReviewsDataforseoLabsSerpElementItem**(`data`?): `GoogleReviewsDataforseoLabsSerpElementItem`

Defined in: main.ts:118874

#### Parameters

##### data?

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md)

#### Returns

`GoogleReviewsDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22569

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:118870

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#cid)

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:118866

the additional feature of the review

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`feature`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#feature)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:118864

the identifier of a place

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`place_id`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#place_id)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:118862

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:118859

the number of reviews

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#reviews_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118879

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

Defined in: main.ts:118901

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleReviewsDataforseoLabsSerpElementItem`

Defined in: main.ts:118894

#### Parameters

##### data

`any`

#### Returns

`GoogleReviewsDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
