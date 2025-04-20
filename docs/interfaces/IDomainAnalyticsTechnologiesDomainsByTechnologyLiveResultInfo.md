[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

Defined in: main.ts:99337

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

Defined in: main.ts:99349

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99341

number of items in the results array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:99343

specified offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:99347

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99339

total number of relevant items in the database
