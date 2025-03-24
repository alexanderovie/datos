[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleReviewsSearchBusinessDataSerpElementItem

# Interface: IGoogleReviewsSearchBusinessDataSerpElementItem

Defined in: main.ts:234058

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:234112

images submitted by the reviewer

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

Defined in: main.ts:234084

indicates whether the reviewer has a ‘local guide’ status

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

Defined in: main.ts:234098

original text of the owner’s response
the original response to the review, no auto-translate applied

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

Defined in: main.ts:234068

original content of the review
the original content of the review, no auto-translate applied

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

Defined in: main.ts:234095

text of the owner’s response
the owner’s response to the review

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

Defined in: main.ts:234101

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

Defined in: main.ts:234106

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### photos\_count?

> `optional` **photos\_count**: `number`

Defined in: main.ts:234082

total number of photos submitted by the reviewer

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:234061

the alignment of the review in SERP
can take the following values: right

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:234092

URL of the reviewer’s profile image

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:234086

profile name of the reviewer

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:234088

URL of the reviewer’s profile

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23439

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23437

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:234078

the rating score submitted by the reviewer

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

Defined in: main.ts:234115

review highlights
contains highlighted review criteria and assessments

***

### review\_id?

> `optional` **review\_id**: `string`

Defined in: main.ts:234110

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:234065

the content of the review

***

### review\_url?

> `optional` **review\_url**: `string`

Defined in: main.ts:234090

the URL of the review

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:234080

total number of reviews submitted by the reviewer

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:234071

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:234076

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23434

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:234063

the XPath of the review
