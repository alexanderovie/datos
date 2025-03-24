[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseMerchantSerpElementItem

# Class: BaseMerchantSerpElementItem

Defined in: main.ts:22852

## Extended by

- [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)
- [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)
- [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)
- [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)
- [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)
- [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)
- [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)
- [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

## Implements

- [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

## Constructors

### Constructor

> **new BaseMerchantSerpElementItem**(`data`?): `BaseMerchantSerpElementItem`

Defined in: main.ts:22868

#### Parameters

##### data?

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

#### Returns

`BaseMerchantSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22866

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22864

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`position`](../interfaces/IBaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22860

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22857

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBaseMerchantSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22854

type of element

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`type`](../interfaces/IBaseMerchantSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22878

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22934

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseMerchantSerpElementItem`

Defined in: main.ts:22887

#### Parameters

##### data

`any`

#### Returns

`BaseMerchantSerpElementItem`
