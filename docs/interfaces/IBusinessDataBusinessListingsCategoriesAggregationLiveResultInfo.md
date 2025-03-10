[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Interface: IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

Defined in: main.ts:221665

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:221670

item types
the number of items in the items array

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](../classes/BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

Defined in: main.ts:221680

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:221672

offset in the results array of returned categories

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:221676

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:221667

total number of results in our database relevant to your request
