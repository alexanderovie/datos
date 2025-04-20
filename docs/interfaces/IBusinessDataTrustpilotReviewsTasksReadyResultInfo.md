[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotReviewsTasksReadyResultInfo

Defined in: main.ts:238877

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:238887

date when the task was posted (in the UTC format)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:238891

URL for collecting the results of the task

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:238880

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:238883

search engine specified when setting the task
can take the following values: trustpilot

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:238885

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:238889

user-defined task identifier
