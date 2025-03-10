[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseAmazonSerpElementItem

# Interface: IBaseAmazonSerpElementItem

Defined in: main.ts:24107

## Extended by

- [`IAmazonAmazonSerpSerpElementItem`](IAmazonAmazonSerpSerpElementItem.md)
- [`IAmazonAmazonPaidSerpElementItem`](IAmazonAmazonPaidSerpElementItem.md)
- [`IAmazonEditorialRecommendationsSerpElementItem`](IAmazonEditorialRecommendationsSerpElementItem.md)
- [`IAmazonRelatedSearchesSerpElementItem`](IAmazonRelatedSearchesSerpElementItem.md)
- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](IAmazonTopRatedFromOurBrandsSerpElementItem.md)
- [`IAmazonAmazonReviewItemSerpElementItem`](IAmazonAmazonReviewItemSerpElementItem.md)
- [`IAmazonAmazonProductInfoSerpElementItem`](IAmazonAmazonProductInfoSerpElementItem.md)
- [`IAmazonAmazonSellerMainItemSerpElementItem`](IAmazonAmazonSellerMainItemSerpElementItem.md)
- [`IAmazonAmazonSellerItemSerpElementItem`](IAmazonAmazonSellerItemSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24115

absolute rank in Amazon SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24112

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24109

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24117

the XPath of the element
