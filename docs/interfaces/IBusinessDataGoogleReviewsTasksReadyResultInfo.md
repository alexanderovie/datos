[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleReviewsTasksReadyResultInfo

Defined in: main.ts:233721

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:233731

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:233735

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:233724

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:233727

search engine specified when setting the task
can take the following values: google

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:233729

type of search engine

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:233733

user-defined task identifier
