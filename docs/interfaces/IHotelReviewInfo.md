[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelReviewInfo

# Interface: IHotelReviewInfo

Defined in: main.ts:231509

## Indexable

\[`key`: `string`\]: `any`

## Properties

### mentions?

> `optional` **mentions**: [`ReviewMentionInfo`](../classes/ReviewMentionInfo.md)[]

Defined in: main.ts:231517

hotel mentions
information about hotel reviews by criteria

***

### other\_sites\_reviews?

> `optional` **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](../classes/OtherSitesReviewsInfo.md)[]

Defined in: main.ts:231523

reviews on third-party sites
reviews from third-paty sites

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:231520

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

\[`key`: `string`\]: `number`

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:231511

overall hotel rating based on customer votes

***

### votes\_count?

> `optional` **votes\_count**: `number`

Defined in: main.ts:231514

number of customer votes
the number of customer votes included in the calculation of the hotel rating
