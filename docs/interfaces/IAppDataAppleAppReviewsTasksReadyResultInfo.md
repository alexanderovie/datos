[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppReviewsTasksReadyResultInfo

# Interface: IAppDataAppleAppReviewsTasksReadyResultInfo

Defined in: main.ts:220005

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:220014

date when the task was posted (in the UTC format)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:220018

URL for collecting the results of the Apple App Reviews task

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:220021

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:220008

task identifier of the completed task
unique task identifier in our system in the UUID format

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:220010

search engine specified when setting the task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:220012

search engine type

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:220016

user-defined task identifier
