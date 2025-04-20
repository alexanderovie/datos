[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

Defined in: main.ts:235385

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:235395

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:235399

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:235388

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:235391

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:235393

type of search engine

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:235397

user-defined task identifier
