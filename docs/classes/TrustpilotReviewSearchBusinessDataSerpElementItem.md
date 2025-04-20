[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrustpilotReviewSearchBusinessDataSerpElementItem

# Class: TrustpilotReviewSearchBusinessDataSerpElementItem

Defined in: main.ts:239080

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TrustpilotReviewSearchBusinessDataSerpElementItem**(`data?`): `TrustpilotReviewSearchBusinessDataSerpElementItem`

Defined in: main.ts:239112

#### Parameters

##### data?

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Returns

`TrustpilotReviewSearchBusinessDataSerpElementItem`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23363

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:239091

the language of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`language`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#language)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:239083

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23361

absolute rank among all the elements

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23359

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:239087

the rating score submitted by the reviewer

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rating)

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

Defined in: main.ts:239108

owner’s response to the submitted review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#responses)

***

### review\_images?

> `optional` **review\_images**: `string`[]

Defined in: main.ts:239104

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_images)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:239100

the content of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:239096

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:239098

the title of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23356

type of element

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:239085

the URL of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#url)

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:239106

user profile of the reviewer

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#user_profile)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:239089

indicates whether the review has the “Verified” mark

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`verified`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#verified)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:239117

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:239153

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `TrustpilotReviewSearchBusinessDataSerpElementItem`

Defined in: main.ts:239146

#### Parameters

##### data

`any`

#### Returns

`TrustpilotReviewSearchBusinessDataSerpElementItem`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
