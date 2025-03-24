[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonProductsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonProductsTaskGetAdvancedResultInfo

Defined in: main.ts:204750

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:204781

amazon product departments and subcategories

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:204764

direct URL to Amazon results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:204769

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:204777

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:204785

Amazon product items within the editorial_recommendations element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:204783

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:204753

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:204761

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:204759

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:204757

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:204779

search engine results count

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:204772

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:204755

type of element
