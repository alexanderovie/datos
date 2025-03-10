[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonSellersTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonSellersTaskGetAdvancedResultInfo

Defined in: main.ts:205666

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:205669

asin received in a POST array
learn more about ASINs in this help center guide

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:205680

direct URL to Amazon results
you can use it to make sure the provided results are accurate

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:205685

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### image?

> `optional` **image**: `string`

Defined in: main.ts:205691

product image url
image URL of the product relevant to the asin received in a POST array

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:205696

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:205700

items in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:205698

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:205677

language code received in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205675

location code received in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:205673

search engine domain received in a POST array

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:205688

product title
title of the product relevant to the asin received in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:205671

type of element
