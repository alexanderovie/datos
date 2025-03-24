[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsGoogleAppIntersectionLiveResultInfo

Defined in: main.ts:134913

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

Defined in: main.ts:134917

ids of the apps in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppIntersectionLiveItem`](../classes/DataforseoLabsGoogleAppIntersectionLiveItem.md)[]

Defined in: main.ts:134927

contains data related to the ranking keywords for the app specified in the app_id field

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:134925

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:134921

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:134919

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:134915

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:134923

total amount of results in our database relevant to your request
