[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleSellersTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleSellersTaskGetAdvancedResultInfo

Defined in: main.ts:199990

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:200004

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:200009

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:200015

URL to the product image

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:200023

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:200027

items in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:200025

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:200001

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:199999

location code in a POST array

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:199993

product_id received in a POST array
learn more about the parameter in this help center guide

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:200018

product rating
the product popularity rate based on product reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:199997

search engine domain in a POST array

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:200011

title of the product

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:199995

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:200013

URL to the product page
