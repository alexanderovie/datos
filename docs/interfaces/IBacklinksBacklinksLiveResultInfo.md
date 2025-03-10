[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksBacklinksLiveResultInfo

# Interface: IBacklinksBacklinksLiveResultInfo

Defined in: main.ts:161920

## Indexable

\[`key`: `string`\]: `any`

## Properties

### custom\_mode?

> `optional` **custom\_mode**: `object`

Defined in: main.ts:161926

custom mode specified in a POST array

#### Index Signature

\[`key`: `string`\]: `any`

***

### items?

> `optional` **items**: [`BacklinksBacklinksLiveItem`](../classes/BacklinksBacklinksLiveItem.md)[]

Defined in: main.ts:161932

contains relevant backlinks and referring domains data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:161930

the number of results returned in the items array

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:161924

mode specified in a POST array

***

### search\_after\_token?

> `optional` **search\_after\_token**: `string`

Defined in: main.ts:161936

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:161922

target domain in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:161928

total amount of results relevant the request
