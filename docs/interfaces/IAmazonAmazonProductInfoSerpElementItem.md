[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonProductInfoSerpElementItem

# Interface: IAmazonAmazonProductInfoSerpElementItem

Defined in: main.ts:204247

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### applicable\_vouchers?

> `optional` **applicable\_vouchers**: [`AmazonApplicableVouchersItem`](../classes/AmazonApplicableVouchersItem.md)[]

Defined in: main.ts:204286

array of objects containing information about applicable vouchers

***

### author?

> `optional` **author**: `string`

Defined in: main.ts:204259

product brand name

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](../classes/ProductCategoryInfo.md)[]

Defined in: main.ts:204290

contains related product categories

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:204277

currency in the ISO format
example:
USD

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:204261

ASIN of the product received in a POST array

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:204298

contains description of the product

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:204255

product specs and other details

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:204257

the URL of the product image

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:204280

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

***

### is\_available?

> `optional` **is\_available**: `boolean`

Defined in: main.ts:204301

indicates whether the product is available for ordering
if the value is true, the product can be ordered

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

Defined in: main.ts:204284

indicates whether the newer model of the product is available

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](../classes/AmazonProductNewerModelInfo.md)

Defined in: main.ts:204288

information about the newer model of the product

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

Defined in: main.ts:204263

parent ASIN of the product

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:204251

the alignment of the element in Amazon SERP
possible values:
left, right

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:204269

the lower limit of the product price range
example:
49.98

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:204273

the upper limit of the product price range
example:
384.99

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

Defined in: main.ts:204265

ASINs of all found product modifications

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

Defined in: main.ts:204294

contains URLs for all images of the product displayed on the left side of the main image

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](../classes/BaseProductInformationItem.md)[]

Defined in: main.ts:204292

contains related product information

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

Defined in: main.ts:204296

contains URLs for all videos of the product displayed on the right side of the main video

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24115

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24112

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:204282

product rating info

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:204253

product title

***

### top\_global\_reviews?

> `optional` **top\_global\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:204306

array of objects with top reviews from around the world

***

### top\_local\_reviews?

> `optional` **top\_local\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:204304

array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24109

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24117

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
