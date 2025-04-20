[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

Defined in: main.ts:104783

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:104803

contains keyword ideas and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:104795

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:104791

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:104789

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:104797

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:104801

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:104785

search engine type

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:104787

target domain in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:104793

total number of results in our database relevant to your request
