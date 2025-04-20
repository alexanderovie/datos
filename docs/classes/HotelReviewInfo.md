[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelReviewInfo

# Class: HotelReviewInfo

Defined in: main.ts:231948

## Implements

- [`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HotelReviewInfo**(`data?`): `HotelReviewInfo`

Defined in: main.ts:231966

#### Parameters

##### data?

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md)

#### Returns

`HotelReviewInfo`

## Properties

### mentions?

> `optional` **mentions**: [`ReviewMentionInfo`](ReviewMentionInfo.md)[]

Defined in: main.ts:231956

hotel mentions
information about hotel reviews by criteria

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`mentions`](../interfaces/IHotelReviewInfo.md#mentions)

***

### other\_sites\_reviews?

> `optional` **other\_sites\_reviews**: [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)[]

Defined in: main.ts:231962

reviews on third-party sites
reviews from third-paty sites

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`other_sites_reviews`](../interfaces/IHotelReviewInfo.md#other_sites_reviews)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:231959

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`rating_distribution`](../interfaces/IHotelReviewInfo.md#rating_distribution)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:231950

overall hotel rating based on customer votes

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`value`](../interfaces/IHotelReviewInfo.md#value)

***

### votes\_count?

> `optional` **votes\_count**: `number`

Defined in: main.ts:231953

number of customer votes
the number of customer votes included in the calculation of the hotel rating

#### Implementation of

[`IHotelReviewInfo`](../interfaces/IHotelReviewInfo.md).[`votes_count`](../interfaces/IHotelReviewInfo.md#votes_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:231975

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:232010

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HotelReviewInfo`

Defined in: main.ts:232003

#### Parameters

##### data

`any`

#### Returns

`HotelReviewInfo`
