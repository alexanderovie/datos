[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleReviewsSerpElementItem

# Class: GoogleReviewsSerpElementItem

Defined in: main.ts:34140

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsSerpElementItem()

> **new GoogleReviewsSerpElementItem**(`data`?): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

Defined in: main.ts:34165

#### Parameters

##### data?

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md)

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21783

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:34157

google-defined client id

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`cid`](../interfaces/IGoogleReviewsSerpElementItem.md#cid)

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:34155

the additional feature of the review

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`feature`](../interfaces/IGoogleReviewsSerpElementItem.md#feature)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:34153

the identifier of a place

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`place_id`](../interfaces/IGoogleReviewsSerpElementItem.md#place_id)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34144

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21778

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:34151

the element’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34161

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleReviewsSerpElementItem.md#rectangle)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:34148

the number of reviews

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsSerpElementItem.md#reviews_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`type`](../interfaces/IGoogleReviewsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:34146

the XPath of the element

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34170

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34195

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

Defined in: main.ts:34188

#### Parameters

##### data

`any`

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
