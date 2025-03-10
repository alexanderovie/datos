[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseMerchantSerpElementItem

# Interface: IBaseMerchantSerpElementItem

Defined in: main.ts:22606

## Extended by

- [`IGoogleShoppingSerpMerchantSerpElementItem`](IGoogleShoppingSerpMerchantSerpElementItem.md)
- [`IGoogleShoppingPaidMerchantSerpElementItem`](IGoogleShoppingPaidMerchantSerpElementItem.md)
- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)
- [`IRelatedSearchesMerchantSerpElementItem`](IRelatedSearchesMerchantSerpElementItem.md)
- [`IShopsListMerchantSerpElementItem`](IShopsListMerchantSerpElementItem.md)
- [`IBuyOnGoogleMerchantSerpElementItem`](IBuyOnGoogleMerchantSerpElementItem.md)
- [`IShoppingSpecificationMerchantSerpElementItem`](IShoppingSpecificationMerchantSerpElementItem.md)
- [`IProductInfoElementMerchantSerpElementItem`](IProductInfoElementMerchantSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

Defined in: main.ts:22618

alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22614

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22611

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22608

type of element
