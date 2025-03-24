[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

Defined in: main.ts:225169

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:225179

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:225183

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:225172

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:225175

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:225177

search engine specified when setting the task

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:225181

user-defined task identifier
