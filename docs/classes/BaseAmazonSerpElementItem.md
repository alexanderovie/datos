[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseAmazonSerpElementItem

# Class: BaseAmazonSerpElementItem

Defined in: main.ts:24358

## Extended by

- [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)
- [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)
- [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)
- [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)
- [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)
- [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)
- [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)
- [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)
- [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

## Implements

- [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

## Constructors

### Constructor

> **new BaseAmazonSerpElementItem**(`data?`): `BaseAmazonSerpElementItem`

Defined in: main.ts:24372

#### Parameters

##### data?

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

#### Returns

`BaseAmazonSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24370

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24366

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24363

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`rank_group`](../interfaces/IBaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24360

type of element

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`type`](../interfaces/IBaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24368

the XPath of the element

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`xpath`](../interfaces/IBaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:24382

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:24443

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseAmazonSerpElementItem`

Defined in: main.ts:24391

#### Parameters

##### data

`any`

#### Returns

`BaseAmazonSerpElementItem`
