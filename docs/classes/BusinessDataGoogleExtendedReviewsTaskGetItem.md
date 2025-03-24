[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTaskGetItem

# Class: BusinessDataGoogleExtendedReviewsTaskGetItem

Defined in: main.ts:235046

## Implements

- [`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleExtendedReviewsTaskGetItem**(`data`?): `BusinessDataGoogleExtendedReviewsTaskGetItem`

Defined in: main.ts:235118

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Returns

`BusinessDataGoogleExtendedReviewsTaskGetItem`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:235108

images submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`images`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#images)

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

Defined in: main.ts:235080

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`local_guide`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#local_guide)

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

Defined in: main.ts:235094

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`original_owner_answer`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#original_owner_answer)

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

Defined in: main.ts:235064

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`original_review_text`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#original_review_text)

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

Defined in: main.ts:235091

text of the owner’s response
the owner’s response to the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_answer`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_answer)

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

Defined in: main.ts:235097

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_time_ago`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_time_ago)

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

Defined in: main.ts:235102

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_timestamp`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_timestamp)

***

### photos\_count?

> `optional` **photos\_count**: `number`

Defined in: main.ts:235078

total number of photos submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`photos_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#photos_count)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:235057

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`position`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#position)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:235088

URL of the reviewer’s profile image

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:235082

profile name of the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:235084

URL of the reviewer’s profile

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:235054

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:235051

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:235074

the rating score submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rating`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rating)

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

Defined in: main.ts:235111

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_highlights`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_highlights)

***

### review\_id?

> `optional` **review\_id**: `string`

Defined in: main.ts:235106

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_id)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:235061

the content of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_text`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_text)

***

### review\_url?

> `optional` **review\_url**: `string`

Defined in: main.ts:235086

the URL of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_url)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:235076

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`reviews_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#reviews_count)

***

### source?

> `optional` **source**: [`Source`](Source.md)

Defined in: main.ts:235114

source of the review
contains information about the source where the review was posted

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`source`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#source)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:235067

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:235072

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:235048

type of element

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`type`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:235059

the XPath of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`xpath`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235127

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235176

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleExtendedReviewsTaskGetItem`

Defined in: main.ts:235169

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleExtendedReviewsTaskGetItem`
