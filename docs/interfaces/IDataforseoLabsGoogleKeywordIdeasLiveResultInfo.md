[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

Defined in: main.ts:106472

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:106493

contains keyword ideas and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:106485

number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:106481

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:106479

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:106487

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:106491

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106474

search engine type

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:106477

keywords in a POST array
keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:106483

total number of results relevant to your request in our database
