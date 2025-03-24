[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingPageIntersectionLiveResultInfo

# Interface: IDataforseoLabsBingPageIntersectionLiveResultInfo

Defined in: main.ts:129865

## Indexable

\[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

Defined in: main.ts:129873

URLs you specified in a POST array that will be excluded from the results

***

### items?

> `optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)[]

Defined in: main.ts:129883

contains keywords, relevant SERP elements and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:129881

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129877

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129875

location code in a POST array

***

### pages?

> `optional` **pages**: `object`

Defined in: main.ts:129871

URLs you specified a POST array

#### Index Signature

\[`key`: `string`\]: `string`

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:129869

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:129879

total amount of results in our database relevant to your request
