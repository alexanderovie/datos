[**Documentation**](../README.md)

***

[Documentation](../README.md) / OtherSitesReviewsInfo

# Class: OtherSitesReviewsInfo

Defined in: main.ts:231342

## Implements

- [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OtherSitesReviewsInfo**(`data`?): `OtherSitesReviewsInfo`

Defined in: main.ts:231358

#### Parameters

##### data?

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

#### Returns

`OtherSitesReviewsInfo`

## Properties

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:231354

rating in the review
information about the rating enclosed in the review on a third-party site

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`rating`](../interfaces/IOtherSitesReviewsInfo.md#rating)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:231351

review text
text of the review

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`review_text`](../interfaces/IOtherSitesReviewsInfo.md#review_text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:231345

review title
contains a name of the third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`title`](../interfaces/IOtherSitesReviewsInfo.md#title)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:231348

review url
URL to the a third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`url`](../interfaces/IOtherSitesReviewsInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:231367

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:231387

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OtherSitesReviewsInfo`

Defined in: main.ts:231380

#### Parameters

##### data

`any`

#### Returns

`OtherSitesReviewsInfo`
