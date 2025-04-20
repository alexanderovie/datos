[**Documentation**](../README.md)

***

[Documentation](../README.md) / ThirdPartyReviewsSerpElementItem

# Class: ThirdPartyReviewsSerpElementItem

Defined in: main.ts:40973

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ThirdPartyReviewsSerpElementItem**(`data?`): `ThirdPartyReviewsSerpElementItem`

Defined in: main.ts:40996

#### Parameters

##### data?

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md)

#### Returns

`ThirdPartyReviewsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:40977

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`position`](../interfaces/IThirdPartyReviewsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`rank_absolute`](../interfaces/IThirdPartyReviewsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`rank_group`](../interfaces/IThirdPartyReviewsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:40988

the element’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`rating`](../interfaces/IThirdPartyReviewsSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:40992

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`rectangle`](../interfaces/IThirdPartyReviewsSerpElementItem.md#rectangle)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:40981

the number of reviews

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`reviews_count`](../interfaces/IThirdPartyReviewsSerpElementItem.md#reviews_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:40983

title of the row

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`title`](../interfaces/IThirdPartyReviewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`type`](../interfaces/IThirdPartyReviewsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:40985

source URL

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`url`](../interfaces/IThirdPartyReviewsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:40979

the XPath of the element

#### Implementation of

[`IThirdPartyReviewsSerpElementItem`](../interfaces/IThirdPartyReviewsSerpElementItem.md).[`xpath`](../interfaces/IThirdPartyReviewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:41001

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:41025

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ThirdPartyReviewsSerpElementItem`

Defined in: main.ts:41018

#### Parameters

##### data

`any`

#### Returns

`ThirdPartyReviewsSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
