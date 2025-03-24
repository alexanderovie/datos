[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

Defined in: main.ts:105890

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:105915

contains keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:105907

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:105903

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:105900

location code in a POST array
if there is no data, then the value is null

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:105909

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:105913

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:105892

search engine type

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:105894

keyword in a POST array

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

Defined in: main.ts:105897

keyword data for the seed keyword
fields in this object are identical to those of the items array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:105905

total amount of results in our database relevant to your request
