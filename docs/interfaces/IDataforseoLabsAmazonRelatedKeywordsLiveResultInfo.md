[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

Defined in: main.ts:122069

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:122086

contains objects with keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:122084

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122080

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122078

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122071

search engine type

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:122073

keyword in a POST array

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`AmazonKeywordData`](../classes/AmazonKeywordData.md)

Defined in: main.ts:122076

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:122082

total amount of results in our database relevant to your request
