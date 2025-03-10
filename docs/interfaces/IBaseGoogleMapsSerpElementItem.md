[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleMapsSerpElementItem

# Interface: IBaseGoogleMapsSerpElementItem

Defined in: main.ts:44104

## Extended by

- [`IGoogleMapsMapsSearchSerpElementItem`](IGoogleMapsMapsSearchSerpElementItem.md)
- [`IGoogleMapsMapsPaidItemSerpElementItem`](IGoogleMapsMapsPaidItemSerpElementItem.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:44115

domain in SERP

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:44113

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:44110

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:44122

the element’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:44125

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:44117

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:44106

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:44119

search URL with refinement parameters
