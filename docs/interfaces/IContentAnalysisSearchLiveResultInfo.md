[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisSearchLiveResultInfo

# Interface: IContentAnalysisSearchLiveResultInfo

Defined in: main.ts:189877

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`ContentAnalysisSearchLiveItem`](../classes/ContentAnalysisSearchLiveItem.md)[]

Defined in: main.ts:189887

contains citations and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:189885

the number of results returned in the items array

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:189881

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:189883

total amount of results in our database relevant to your request
