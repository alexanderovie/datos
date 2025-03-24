[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Interface: IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

Defined in: main.ts:228557

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:228567

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:228571

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:228560

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:228563

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:228565

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:228569

user-defined task identifier
