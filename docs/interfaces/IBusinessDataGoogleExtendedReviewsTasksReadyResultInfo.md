[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo

Defined in: main.ts:234855

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:234865

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:234869

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:234858

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:234861

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:234863

type of search engine

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:234867

user-defined task identifier
