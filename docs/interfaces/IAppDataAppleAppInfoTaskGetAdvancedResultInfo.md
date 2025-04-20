[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppInfoTaskGetAdvancedResultInfo

Defined in: main.ts:219185

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:219187

application id received in a POST request

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:219196

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:219201

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:219207

found app info

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:219205

the number of items in the results array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:219193

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:219191

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:219189

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:219203

the total number of results
