[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITripadvisorReviewSearchBusinessDataSerpElementItem

# Interface: ITripadvisorReviewSearchBusinessDataSerpElementItem

Defined in: main.ts:241107

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_of\_visit?

> `optional` **date\_of\_visit**: `string`

Defined in: main.ts:241119

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:241110

the alignment of the review in SERP
can take the following values: right

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

Defined in: main.ts:241114

the rating score submitted by the reviewer

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

Defined in: main.ts:241134

contains information about the owner’s response

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

Defined in: main.ts:241137

review highlights
contains highlighted review criteria and assessments

***

### review\_images?

> `optional` **review\_images**: [`ImageUrlInfo`](../classes/ImageUrlInfo.md)[]

Defined in: main.ts:241130

contains URLs of the images used in the review

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:241128

content of the review

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:241124

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:241126

title of the review

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23434

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:241112

URL of the review

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

Defined in: main.ts:241132

information from the reviewer’s profile
