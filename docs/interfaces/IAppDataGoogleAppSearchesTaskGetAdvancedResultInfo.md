[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

Defined in: main.ts:211869

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:211880

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:211885

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:211891

found apps

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:211889

the number of items in the results array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:211871

keyword received in a POST request

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:211877

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:211875

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:211873

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:211887

the total number of results
