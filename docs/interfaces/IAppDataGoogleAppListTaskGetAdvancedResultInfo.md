[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppListTaskGetAdvancedResultInfo

Defined in: main.ts:212884

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:212895

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:212900

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:212907

found apps

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:212905

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:212886

app collection received in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:212892

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:212890

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:212888

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:212902

the total number of results
