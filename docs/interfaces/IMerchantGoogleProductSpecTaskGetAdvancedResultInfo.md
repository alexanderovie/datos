[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

Defined in: main.ts:198746

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:198768

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:198773

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:198761

description of the product

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:198763

URL of the product image

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:198777

types of items found on the product specification page
possible item types:
shopping_specification

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:198782

items on the product specification page
contains all product attributes and related data listed on the product specification page

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:198779

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:198757

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:198755

location code in a POST array

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:198749

product ID in a POST array
learn more about the parameter in this help center guide

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:198753

search engine domain in a POST array

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:198765

tags of the product

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198759

title of the product

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:198751

type of element
