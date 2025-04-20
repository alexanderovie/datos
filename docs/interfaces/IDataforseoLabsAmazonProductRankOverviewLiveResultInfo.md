[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

# Interface: IDataforseoLabsAmazonProductRankOverviewLiveResultInfo

Defined in: main.ts:125979

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductRankOverviewLiveItem`](../classes/DataforseoLabsAmazonProductRankOverviewLiveItem.md)[]

Defined in: main.ts:125993

contains detected Amazon product competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:125991

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:125987

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:125984

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:125981

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:125989

total amount of results in our database relevant to your request
