[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleShoppingSponsoredCarouselElement

# Interface: IGoogleShoppingSponsoredCarouselElement

Defined in: main.ts:195907

## Indexable

\[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:195926

currency in the ISO format
example:
USD

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

Defined in: main.ts:195938

delivery information
delivery information including free and fast delivery date ranges

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:195922

product price
example:
384.99

***

### product\_images?

> `optional` **product\_images**: `string`[]

Defined in: main.ts:195932

URLs to the images of the product
the first URL in the array is the featured image of the product

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:195929

product rating
the product popularity rate based on product reviews

***

### seller?

> `optional` **seller**: `string`

Defined in: main.ts:195918

name of the seller
the name of the company that placed a corresponding product on Google Shopping

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:195935

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:195915

tags assigned to the product

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:195913

product title

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:195909

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:195911

XPath of the element
