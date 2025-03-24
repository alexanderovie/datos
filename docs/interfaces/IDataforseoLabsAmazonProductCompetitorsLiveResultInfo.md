[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

Defined in: main.ts:126403

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:126407

ASIN in a POST array

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

Defined in: main.ts:126419

contains detected Amazon product competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:126417

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:126413

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:126410

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:126405

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:126415

total amount of results in our database relevant to your request
