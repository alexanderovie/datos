[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorSearchTaskGetResultInfo

# Interface: IBusinessDataTripadvisorSearchTaskGetResultInfo

Defined in: main.ts:240689

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:240701

direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:240706

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:240709

item types encountered in the result
possible item types: tripadvisor_search_organic

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:240717

Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:240714

the number of items in the results array
you can get more results by using the depth parameter when setting a task

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:240692

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:240698

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:240696

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:240694

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:240711

the total number of results
