[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonReviewItemSerpElementItem

# Interface: IAmazonAmazonReviewItemSerpElementItem

Defined in: main.ts:206944

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### helpful\_votes?

> `optional` **helpful\_votes**: `number`

Defined in: main.ts:206954

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:206956

images of the product submitted by the reviewer

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:206947

the alignment of the review in SERP
can take the following values: right

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:206971

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24462

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24459

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:206973

the rating score submitted by the reviewer

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:206966

content of the review

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:206951

subtitle of the review

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:206962

title of the review

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24456

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206964

URL to the reviewer’s profile

***

### user\_profile?

> `optional` **user\_profile**: [`UserProfileInfo`](../classes/UserProfileInfo.md)

Defined in: main.ts:206960

user profile of the reviewer

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:206949

indicates whether the review has the “Verified Purchase” mark

***

### videos?

> `optional` **videos**: [`VideoElement`](../classes/VideoElement.md)[]

Defined in: main.ts:206958

videos of the product submitted by the reviewer

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24464

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
