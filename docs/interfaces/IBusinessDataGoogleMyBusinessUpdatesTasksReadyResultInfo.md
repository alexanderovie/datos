[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

Defined in: main.ts:227335

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:227345

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:227349

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:227338

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:227341

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:227343

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:227347

user-defined task identifier
