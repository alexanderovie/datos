[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppSearchesTasksReadyResultInfo

# Interface: IAppDataGoogleAppSearchesTasksReadyResultInfo

Defined in: main.ts:211451

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:211460

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:211464

URL for collecting the results of the Google App Searches task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:211467

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:211454

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:211456

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:211458

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:211462

user-defined task identifier
